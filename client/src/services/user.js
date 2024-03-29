import axios from "axios"
import header from "./header.js"

const API_URL = 'http://localhost:3000/api/'

const userGet = (user_id) => {
    return axios.get(API_URL + 'user.get' + `/${user_id}`, {headers: header()})
}

const productsGet = (category) => {
    if(!category) category = 'all' 
    return axios.get(API_URL + 'products.get' + `/${category}`)
}

const adminGet = () => {
    return axios.get(API_URL + 'user.getRole', {headers: header()})
}
const changeUserInfo = (user_info) => {
    return axios.post(API_URL + 'user.changeUserInfo', {user_info}, {headers: header()})
}
const buy = (items) => {
    return axios.post(API_URL + 'user.buy', {items}, {headers: header()})
}
const popularProductGet = () => {
    return axios.get(API_URL + 'products.popularProductGet')
}
const productGetById = (id) => {
    return axios.get(API_URL + 'products.getById' + `/${id}`)
}

const ordesGet = (user_id) => {
    return axios.get(API_URL + 'user.ordersGet' + `/${user_id}`, {headers: header()})
}

export default { userGet, productsGet, adminGet, changeUserInfo, buy, popularProductGet, productGetById, ordesGet}