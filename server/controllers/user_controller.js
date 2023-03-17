import db from '../db/db.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'
import { response } from 'express'

const userGet = async (req, res) => {
    try {

        let decoded = jwt.verify(req.headers['x-access-token'], config.SERCRET_KEY)
        let answer;

        if(req.params.user_id === 'undefined') {
            answer = await db.query('SELECT * FROM users WHERE id = ?', [decoded.user_id])
        } else {
            answer = await db.query('SELECT * FROM users WHERE id = ?', [req.params.user_id])
        }
            
        res.status(200).json({
            response: {
                data: {
                    id: answer[0].id,
                    email: answer[0].email,
                    first_name: answer[0].first_name,
                    last_name: answer[0].last_name,
                    created: answer[0].created
                },
                message: "Данные успешно получены"
            }
        })

        if (Date.now() >= decoded.exp * 1000) {
            console.log("false");
        }
    } catch (error) {
        res.status(500).json({
            error: {
                message: "Какая-то ошибка"
            }
        })
        console.log(error);
    }
}

const getRole = async (req, res) => {
    try {
        let decoded = jwt.verify(req.headers['x-access-token'], config.SERCRET_KEY)

        let answer = await db.query('SELECT * FROM users WHERE id = ?', [decoded.user_id])
        
        let role;
        if(answer[0].role === 0) role = 'USER'
        if(answer[0].role === 1) role = 'ADMIN'

        return res.status(200).json({
            response: {
                data: {
                    id: answer[0].id,
                    role: role
                },
                message: "Данные успешно получены"
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

const changeUserInfo = async (req, res) => {
    try {
        let decoded = jwt.verify(req.headers['x-access-token'], config.SERCRET_KEY)
        let {first_name, last_name, email} = req.body.user_info;

        let answer = await db.query('UPDATE users SET first_name = ?, last_name = ? WHERE id = ?', [first_name, last_name, decoded.user_id])

        return res.status(200).json({
            response: {
                data: {
                    
                },
                message: "Данные успешно получены"
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

export default {
    userGet, getRole, changeUserInfo
}