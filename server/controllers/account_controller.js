import db from '../db/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config.js' 

const registration = async (req, res) => {
    try {
        let {email, password} = req.body;

        let answer = await db.query('SELECT * FROM users WHERE email = ?', [email])

        if(answer[0]){
            return res.status(409).json({
                error: {
                    message: "Пользователь уже существует"
                }
            })
        }

        let hashed_password = await bcrypt.hash(password, 10);
        await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashed_password])

        console.log('yes');

        let answer_user = await db.query('SELECT * FROM users WHERE email = ?', [email])
        let token = jwt.sign({'user_id': answer_user[0].id}, config.SERCRET_KEY, {expiresIn: '24h'})

        console.log('yes222');

        return res.status(201).json({
            response: {
                data: {
                    id: answer_user[0].id,
                    email: email,
                    token: token
                },
                message: "Регистрация прошла успешно"
            }
        })
    } catch (error) {
        return res.status(500).json({
            error: {
                message: error.message
            }
        })
    }
}

const login = async (req, res) => {
    try {
        let {email, password} = req.body;

        let answer = await db.query('SELECT * FROM users WHERE email = ?', [email])

        if(!answer[0]){
            return res.status(409).json({
                error: { 
                    message: "Данный пользователь не зарегистрирован" 
                } 
            })
        }

        let valid = await bcrypt.compare(password, answer[0].password)

        if(!valid){
            return res.status(400).json({
                error: { 
                    message: "Пароль неверный" 
                } 
            })
        }

        let token = jwt.sign({'user_id': answer[0].id}, config.SERCRET_KEY, {expiresIn: '24h'})

        return res.status(201).json({
            response: {
                data: {
                    id: answer[0].id,
                    email: email,
                    token: token
                },
                message: "Авторизация прошла успешно"
            }
        })
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message
            }
        })
    }
}

export default { registration, login }