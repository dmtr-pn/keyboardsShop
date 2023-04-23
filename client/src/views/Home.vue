<template>
    <div class="main-name">
        Топ продаж
    </div>
    <div class="main__ container">
        <div class="main__img"></div>
        <div class="main__content">
            <div class="main__content-name">
                <div class="main__content-name-name">{{this.popular.name}}</div>
                <div class="main__content-name-size">{{this.popular.size}}%</div>
            </div>
            <div class="main__content-price">
                <div class="main__content-price-price">{{this.popular.cost}} $</div>
                <button class="main__content-price-btn" style="margin-left: 10px" type="submit" v-on:click="test()">Купить</button>
            </div>
        </div>
    </div>
    <div class="categories__ container">
        <div class="categories-">Категории</div>
        <div class="categories__grid">

            <CategoriesItem v-for="item in data" :key="item.id" :info="item"/>

        </div>
    </div>
    <Footer />
</template>

<script>
import CategoriesItem from '../components/CategoriesItem.vue'
import test from '../services/user.js'
import Footer from '../components/Footer.vue'
import actions from '../services/user.js'

export default {
    name: 'Home',
    components: {
        CategoriesItem, Footer
    },
    data() {
        return {
            data: [
                {id: 0, color: 'black', name: 'Varmilo', category: 'Клавиатуры', categoryKeyboard: 'varmilo'},
                {id: 1, color: 'pink', name: 'Leopold', category: 'Клавиатуры', categoryKeyboard: 'leopold'},
                {id: 2, color: 'blue', name: 'Ducky', category: 'Клавиатуры', categoryKeyboard: 'ducky'},
                {id: 3, color: 'green', name: 'Vortex', category: 'Клавиатуры', categoryKeyboard: 'vortex'}
            ],
            popular: []
        }
    },
    methods: {
        test() {
            this.$notify({
                title: "Успех",
                text: "HE",
                duration: 1000,
                type: 'success',
            });
        }
    },
    mounted() {
        actions.popularProductGet().then(res => {
            actions.productGetById(res.data.response.data[0].product_id).then(res => {
                this.popular = res.data.response.data[0]
            }, err => {
                console.log(err);
            })
        }, err => {
            console.log(err);
        })
    }
}
</script>

<style scoped>
.categories- {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    margin-top: 20px;
}
.categories__ {
    padding: 0 20px;
}
.categories__grid {
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.main__ {
    padding: 0 20px;
    margin-top: 100px;
    margin-bottom: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.main-name {
    text-align: center;
    margin-top: 20px;
    font-weight: 700;
    font-size: 64px;
}
.main__img {
    max-width: 453px;
    width: 100%;
    height: 293px;

    background-image: url('../assets/9.jpg');
    background-size: cover;
    border-radius: 25px;
}
.main__content {
    margin-left: 20px;
}
.main__content-name-name {
    font-weight: 700;
    font-size: 48px;
}
.main__content-name-size {
    font-weight: 400;
    font-size: 32px;
}
.main__content-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main__content-price-price {
    font-weight: 700;
    font-size: 48px;
}
.main__content-price-btn {
    padding: 10px 25px;
    background: linear-gradient(99.04deg, #353535 0.88%, #000000 100%);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    border: none;
}

@media screen  and (max-width: 1024px){
    .categories__grid-item {
        width: calc(33% - 51px);
    }
}
@media screen  and (max-width: 768px) {
    .categories__grid-item {
        width: 100%;
    }
    .main__ {
        padding: 0 20px;
        margin-top: 20px;
        display: block;
        margin-bottom: 0;
    }
    .main__content {
        margin-left: 0;
    }
    .main__img {
        max-width: 100%;
    }
}
</style>