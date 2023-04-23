import { defineStore } from 'pinia'
import authService from '../services/auth.js'
import jwtDecode from 'jwt-decode';

export const useAuthStore = defineStore('auth', {
    state: () => {
        return { 
            userInfo: []
        }
    },
    actions: {
        checkAuth() {
            let token = localStorage.getItem('user_token')
            if(token) {
                this.userInfo = jwtDecode(token);
                return true;
            }else {
                return false
            }
            
        },
        login(data) {
            return authService.login(data).then(res => {
                this.userInfo = jwtDecode(res.data.token);
                return Promise.resolve(res.message)
            }, err => {
                return Promise.reject(err)
            })
        },
        registration(data) {
            return authService.registration(data).then(res => {
                this.userInfo = jwtDecode(res.data.token);
                return Promise.resolve(res.message)
            }, err => {
                return Promise.reject(err)
            })
        },
        logout() {
            authService.logout()
            this.userInfo = []
        }
    },
})