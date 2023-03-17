<template>
    <div class="main__">
        <div class="main__name">Личные данные</div>
        <div class="main__info">
            <div class="main__info-item">
                <div class="main__info-item-name">Фамилия</div>
                <input v-if="this.changeActive" type="text" class="change-inpt" v-model="this.datas.last_name" placeholder="Введите данные">
                <div class="main__info-item-data" v-if="!this.changeActive">{{this.datas.last_name}}</div>
            </div>

            <div class="main__info-item">
                <div class="main__info-item-name">Имя</div>
                <input v-if="this.changeActive" type="text" class="change-inpt" v-model="this.datas.first_name" placeholder="Введите данные">
                <div class="main__info-item-data" v-if="!this.changeActive">{{this.datas.first_name}}</div>
            </div>

            <div class="main__info-item">
                <div class="main__info-item-name">Email</div>
                <div class="main__info-item-data">{{this.datas.email}}</div>
            </div>
        </div>
        <button v-if="!this.changeActive" class="main__info-change-btn" style="margin-top: 20px" v-on:click="this.changeActive = !this.changeActive">Изменить</button>

        <button v-if="this.changeActive" class="main__info-change-btn danger" style="margin-top: 20px" v-on:click="this.changeActive = !this.changeActive">Отменить</button>
        <button v-if="this.changeActive" class="main__info-change-btn" style="margin-top: 20px" v-on:click="changeData()">Сохранить</button>
    </div>
</template>

<script>
import actions from '../services/user.js'

export default {
    name: 'MainProfile',
    data() {
        return {
            datas: {
                first_name: '',
                last_name: '',
                email: ''
            },
            changeActive: false
        }
    },
    methods: {
        changeData() {
            actions.changeUserInfo(this.datas).then(res => {
                this.changeActive = false
            }, err => {
                console.log(err);
            })
        }
    },
    mounted() {
        actions.userGet().then(res => {
            this.datas.first_name = res.data.response.data.first_name
            this.datas.last_name = res.data.response.data.last_name
            this.datas.email = res.data.response.data.email
        }, err => {
            console.log(err);
        })

    }
}
</script>

<style scoped>
.main__ {
    width: 100%;
}
.main__name {
    font-size: 32px;
}
.main__info {
    margin-top: 20px;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
}
.main__info-item {
    min-width: 200px;
}
.main__info-item-name {
    opacity: .5;
    font-size: 20px;
    margin-bottom: 10px;
}
.main__info-item-data {
    font-size: 20px;
}
.main__info-change-btn {
    padding: 10px 25px;
    background: linear-gradient(99.04deg, #353535 0.88%, #000000 100%);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    border: none;
    margin-right: 20px;
}
.danger {
    background: linear-gradient(99.04deg, #EF6060 0.88%, #C53030 100%);
}
.change-inpt {
    width: 100%;
    background: #FAFAFA;
    border-radius: 25px;
    padding: 10px 25px;
    font-size: 20px;
    border: none;
}
</style>