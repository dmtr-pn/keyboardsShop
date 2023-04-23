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
        
        return res.status(200).json({
            response: {
                data,
                message: "Данные успешно получены"
            }
        })
    } catch (error) {
        return res.status(500).json({
            error: {
                message: "Какая-то ошибка"
            }
        })
    }
}

const popularProductGet = async (req, res) => {
    try {
        let data = await db.query('SELECT product_id, SUM(product_count) AS total FROM sales GROUP BY product_id ORDER BY total DESC')  

        return res.status(200).json({
            response: {
                data,
                message: "Данные успешно получены"
            }
        })
    } catch (error) {
        return res.status(500).json({
            error: {
                message: "Какая-то ошибка"
            }
        })
    }
}

const productGetById = async (req, res) => {
    try {
        let data = await db.query('SELECT * FROM items WHERE id = ?', [req.params.id])  

        return res.status(200).json({
            response: {
                data,
                message: "Данные успешно получены"
            }
        })
    } catch (error) {
        return res.status(500).json({
            error: {
                message: "Какая-то ошибка"
            }
        })
    }
}

export default {
    productsGet, popularProductGet, productGetById
}