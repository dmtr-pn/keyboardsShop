<template>
    <div class="main__item">
        <div class="main__item-img" v-bind:style="`background: ${this.imgUrl};
    background-position: center;
    background-size: cover;`"></div>
        <div class="main__item-info">
            <div class="main__item-info-name">{{this.info.name}}</div>
            <div class="main__item-info-size">{{this.info.size}}</div>
            <div class="main__item-info-footer">
                <div class="main__item-info-footer-price">{{this.info.cost}} $</div>
                <button class="main__item-info-footer-button" type="submit" v-on:click="addToCart(this.info)">Купить</button>
            </div>
        </div>
    </div>
</template>

<script>
import {useCartStore} from "@/store/cart"
import {mapStores} from "pinia"

export default {
    name: "ProductItem",
    props: ['info'],
    data() {
        return {
            imgUrl: `url(${require('@/assets/' + this.info.img)})`
        }
    },
    methods: {
        addToCart(item) { 
            this.cartStore.addToCart(item);
            this.$notify({
                title: "Успех",
                text: 'Товар успешно добавлен',
                duration: 1000,
                type: 'success',
            });
        }
    },
    computed: {
        ...mapStores(useCartStore)
    }
}
</script>

<style scoped>
.main__item {
    border-radius: 25px;
    width: calc(33% - 11.21px);
    background: linear-gradient(146.14deg, #FFFFFF 0%, #F7F7F7 100%);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
.main__item-img {
    border-radius: 25px 25px 0 0;
    height: 240px;
}
.main__item-info {
    padding: 20px;
}
.main__item-info-name {
    font-weight: 700;
    font-size: 28px;
}
.main__item-info-size {
    font-weight: 400;
    font-size: 24px;    
}
.main__item-info-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.main__item-info-footer-price {
    font-weight: 700;
    font-size: 28px;
}
.main__item-info-footer-button {
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
    .main__item-info-footer {
        flex-direction: column;
        align-items: center;
    }
    .main__item-info-footer-button{
        width: 100%;
    }
    .main__item {
        width: calc(50% - 11.21px);
    }
}
@media screen  and (max-width: 768px) { 
    .main__item {
        width: 100%;
    }
}
</style>