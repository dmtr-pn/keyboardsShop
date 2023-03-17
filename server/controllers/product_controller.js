import db from '../db/db.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'

const productsGet = async (req, res) => {
    try {

        let data;

        if(req.params.products_caregory == 'all') {
            data = await db.query('SELECT * FROM items')
        } else {
            data = await db.query('SELECT * FROM items WHERE category = ?', [req.params.products_caregory])
        }
        
        res.status(200).json({
            response: {
                data,
                message: "Данные успешно получены"
            }
        })
        console.log(req.params);
    } catch (error) {
        res.status(500).json({
            error: {
                message: "Какая-то ошибка"
            }
        })
        console.log(error);
    }
}

export default {
    productsGet
}