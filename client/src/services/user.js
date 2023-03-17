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

export default { userGet, productsGet, adminGet, changeUserInfo}