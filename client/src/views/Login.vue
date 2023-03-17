<template>
    <div class="container">
        <form class="form" @submit.prevent="login()">

            <div class="form__inner">
                <div class="formName">Авторизация</div>
                <div class="form__item">
                    <div class="form__item-icon">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22.5C10.6333 22.5 9.34167 22.2373 8.125 21.712C6.90833 21.1867 5.84567 20.47 4.937 19.562C4.029 18.654 3.31233 17.5917 2.787 16.375C2.26167 15.1583 1.99933 13.8667 2 12.5C2 11.1167 2.26267 9.82067 2.788 8.612C3.31333 7.40333 4.03 6.34533 4.938 5.438C5.846 4.52933 6.908 3.81267 8.124 3.288C9.34 2.76333 10.632 2.50067 12 2.5C13.3833 2.5 14.6793 2.76267 15.888 3.288C17.0967 3.81333 18.1547 4.53 19.062 5.438C19.9707 6.346 20.6873 7.40433 21.212 8.613C21.7367 9.82167 21.9993 11.1173 22 12.5V13.95C22 14.9333 21.6627 15.771 20.988 16.463C20.3133 17.155 19.484 17.5007 18.5 17.5C17.9 17.5 17.3417 17.3667 16.825 17.1C16.3083 16.8333 15.8833 16.4833 15.55 16.05C15.1 16.5 14.5707 16.8543 13.962 17.113C13.3533 17.3717 12.6993 17.5007 12 17.5C10.6167 17.5 9.43733 17.0123 8.462 16.037C7.48667 15.0617 6.99933 13.8827 7 12.5C7 11.1167 7.48767 9.93733 8.463 8.962C9.43834 7.98667 10.6173 7.49933 12 7.5C13.3833 7.5 14.5627 7.98767 15.538 8.963C16.5133 9.93833 17.0007 11.1173 17 12.5V13.95C17 14.4333 17.15 14.8123 17.45 15.087C17.75 15.3617 18.1 15.4993 18.5 15.5C18.9 15.5 19.25 15.3623 19.55 15.087C19.85 14.8117 20 14.4327 20 13.95V12.5C20 10.3167 19.2123 8.43733 17.637 6.862C16.0617 5.28667 14.1827 4.49933 12 4.5C9.81667 4.5 7.93733 5.28767 6.362 6.863C4.78667 8.43833 3.99933 10.3173 4 12.5C4 14.6833 4.78767 16.5627 6.363 18.138C7.93833 19.7133 9.81733 20.5007 12 20.5H17V22.5H12ZM12 15.5C12.8333 15.5 13.5417 15.2083 14.125 14.625C14.7083 14.0417 15 13.3333 15 12.5C15 11.6667 14.7083 10.9583 14.125 10.375C13.5417 9.79167 12.8333 9.5 12 9.5C11.1667 9.5 10.4583 9.79167 9.875 10.375C9.29167 10.9583 9 11.6667 9 12.5C9 13.3333 9.29167 14.0417 9.875 14.625C10.4583 15.2083 11.1667 15.5 12 15.5Z" fill="#8E8E8E"/>
                        </svg>
                    </div>
                    <input type="email" class="form__item-inpt" v-model="this.user.email" placeholder="Email" required>
                </div>

                <div class="form__item">
                    <div class="form__item-icon">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 22.5C5.45 22.5 4.979 22.304 4.587 21.912C4.195 21.52 3.99934 21.0493 4 20.5V10.5C4 9.95 4.196 9.479 4.588 9.087C4.98 8.695 5.45067 8.49933 6 8.5H7V6.5C7 5.11667 7.48767 3.93733 8.463 2.962C9.43834 1.98667 10.6173 1.49933 12 1.5C13.3833 1.5 14.5627 1.98767 15.538 2.963C16.5133 3.93833 17.0007 5.11733 17 6.5V8.5H18C18.55 8.5 19.021 8.696 19.413 9.088C19.805 9.48 20.0007 9.95067 20 10.5V20.5C20 21.05 19.804 21.521 19.412 21.913C19.02 22.305 18.5493 22.5007 18 22.5H6ZM6 20.5H18V10.5H6V20.5ZM12 17.5C12.55 17.5 13.021 17.304 13.413 16.912C13.805 16.52 14.0007 16.0493 14 15.5C14 14.95 13.804 14.479 13.412 14.087C13.02 13.695 12.5493 13.4993 12 13.5C11.45 13.5 10.979 13.696 10.587 14.088C10.195 14.48 9.99934 14.9507 10 15.5C10 16.05 10.196 16.521 10.588 16.913C10.98 17.305 11.4507 17.5007 12 17.5ZM9 8.5H15V6.5C15 5.66667 14.7083 4.95833 14.125 4.375C13.5417 3.79167 12.8333 3.5 12 3.5C11.1667 3.5 10.4583 3.79167 9.875 4.375C9.29167 4.95833 9 5.66667 9 6.5V8.5Z" fill="#8E8E8E"/>
                        </svg>

                    </div>
                    <input type="password" class="form__item-inpt" v-model="this.user.password" placeholder="Пароль" required>
                </div>

                <button class="btn" type="submit" >Войти</button>
                <div class="m">Нет аккаунта? <router-link to="/registration" style="color: #FF7676">Создайте</router-link></div>
            </div>

        </form>
    </div>
</template>

<script>
import auth from '../services/auth.js'

export default {
    name: "Login",
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        logged_status() {
            return this.$store.state.logged.status;
        }
    },
    created() {
        if(this.logged_status){
            this.$router.push('/')
        }
    },
    methods: {
        login() {

            this.$store.dispatch('login', this.user).then((response) =>{
                this.$router.push('/')
                this.$notify({
                    title: "Успех",
                    text: response,
                    duration: 1000,
                    type: 'success',
                });
            }, err => {
                this.$notify({
                    title: "Ошибка",
                    text: err,
                    duration: 5000,
                    type: 'error',
                });
            })

        }
    }
}
</script>

<style scoped>
.m {
    margin-top: 10px;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
}
.form {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
.formName {
    font-weight: 700;
    font-size: 32px;
    text-align: center;
}
.form__item {
    margin-top: 20px;
    max-width: 350px;
    width: 100%;
    display: flex;
    align-items: center;
}
.form__item-icon {
    position: absolute;
    margin-left: 25px;
    height: 25px;
}
.form__item-inpt {
    width: 100%;
    padding: 10px 60px;
    background: #EEEEEE;
    border-radius: 25px;
    border: none;
    font-weight: 400;
    font-size: 20px;
}
.btn {
    margin-top: 20px;
    padding: 10px 0;
    width: 100%;
    background: linear-gradient(99.04deg, #353535 0.88%, #000000 100%);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    border: none;
}
</style>