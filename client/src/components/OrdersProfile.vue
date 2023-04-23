<template>
    <div class="main__">
        <div class="main__name">История заказов</div>
        <div class="main__info">
            <div class="names">
                <div class="names-name">Название</div>
                <div class="names-count">Количество</div>
                <div class="names-date">Дата</div>
            </div>
            <div class="main__item" v-for="item in this.datas">
                <div class="item-name">{{item.product_name}}</div>
                <div class="item-count">{{item.product_count}}</div>
                <div class="item-date">{{this.date(item.date)}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import actions from '../services/user.js'

export default {
    name: 'OrdersProfile',
    data() {
        return {
            datas: []
        }
    },
    methods: {
        date(dates) {
            var a = new Date(dates);
            var months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
            return time;
        }
    },
    mounted() {
        actions.ordesGet().then(res => {
            this.datas = res.data.response.data
        }, err => {
            console.log(err);
        })
    }
}
</script>

<style scoped>
.names {
    display: flex;
    justify-content: space-between;
}
.names-name {
    width: 50px;
    opacity: .5;
    font-size: 20px;
    margin-bottom: 10px;
}
.names-count {
    opacity: .5;
    font-size: 20px;
    margin-bottom: 10px;
}
.names-date {
    opacity: .5;
    font-size: 20px;
    margin-bottom: 10px;
}
.main__ {
    width: 100%;
}
.main__name {
    font-size: 32px;
}
.main__info {
    margin-top: 20px;
}
.main__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px; 
    padding: 5px 10px;
    margin-top: 5px;
}
.main__item:hover {
    background: #EEEEEE;
    cursor: pointer;
}
.item-name {
    width: 200px;
    font-size: 24px;
}
.item-count {
    font-size: 24px;
    font-weight: bold;
}
.item-date {
    width: 200px;
    display: flex;
    justify-content: end;
}
</style>