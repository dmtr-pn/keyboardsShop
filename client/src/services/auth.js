import axios from 'axios'

const API_URL = 'http://localhost:3000/api/'

const login = (user_info) => new Promise((resolve, reject) => {
    axios.post(API_URL + 'account.login', {email: user_info.email, password: user_info.password}).then(res => {

        if(res.data.response.data.token) {
            localStorage.setItem('user_token', res.data.response.data.token)
            resolve(res.data.response.message)
        }

    }).catch(err => {
        reject(err.response.data.error.message)
    })
})

const registration = (user_info) => new Promise((resolve, reject) => {
    axios.post(API_URL + 'account.registration', {email: user_info.email, password: user_info.password}).then(res => {

        if(res.data.response.data.token) {
            localStorage.setItem('user_token', res.data.response.data.token)
            resolve(res.data.response.message)
        }

    }).catch(err => {
        reject(err.response.data.error.message)
    })
})

const logout = () => {
    localStorage.removeItem('user_token')
}

export default { login, registration, logout}