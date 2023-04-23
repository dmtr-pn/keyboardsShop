<template>
    <div class="items__item">
        <div class="items__item-img" v-bind:style="`background: ${this.info.img};     background-position: center;    background-size: cover;`">
        </div>


        <div class="items__right">
            <div class="items__item-info">
                <div class="info-name">{{this.info.name}}</div>
                <div class="info-num">#{{this.info.id}}</div>
            </div>
            <div class="items__item-count">
                <button class="btn-icn" v-on:click="countRemove(this.info)">-</button>
                <span class="icn-num">{{this.info.count}}</span>
                <button class="btn-icn" v-on:click="countAdd(this.info)">+</button>
            </div>

            <div class="items__right-down">
                <div class="items__item-price">{{this.info.price}}$</div>
                <div class="items__item-delete">
                    <svg v-on:click="removeFromCart(this.info)" class="s" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.33325 24C3.59992 24 2.97236 23.7391 2.45059 23.2173C1.92792 22.6947 1.66659 22.0667 1.66659 21.3333V4H0.333252V1.33333H6.99992V0H14.9999V1.33333H21.6666V4H20.3333V21.3333C20.3333 22.0667 20.0724 22.6947 19.5506 23.2173C19.0279 23.7391 18.3999 24 17.6666 24H4.33325ZM17.6666 4H4.33325V21.3333H17.6666V4ZM6.99992 18.6667H9.66659V6.66667H6.99992V18.6667ZM12.3333 18.6667H14.9999V6.66667H12.3333V18.6667Z" fill="black"/>
                    </svg>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
import {useCartStore} from "@/store/cart"
import {mapStores} from "pinia"

export default {
    name: "CartItem.vue",
    props: ['info'],
    methods: {
        removeFromCart(item) {
            this.cartStore.removeFromCart(item);
        },
        countAdd(item) {
            this.cartStore.countAdd(item);
        },
        countRemove(item) {
            this.cartStore.countRemove(item);
        }
    },
    computed: {
        ...mapStores(useCartStore)
    }
}
</script>

<style scoped>
.s:hover {
    cursor: pointer;
}
.items__item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}
.items__right {
    display: flex;
    width: 75%;
    justify-content: space-between;
}
.items__right-down {
    display: flex;
    width: 15%;
    justify-content: space-between;
}
.items__item-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.info-name {
    font-weight: 700;
    font-size: 20px;
}
.info-num {
    font-weight: 400;
    font-size: 16px;
    opacity: .5;
}
.btn-icn {
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    color: #fff;
    background-color: #000000;
    font-size: 22px;
}
.icn-num {
    font-weight: 700;
    font-size: 20px;
    margin: 0 15px;
}
.items__item-price {
    font-weight: 700;
    font-size: 20px;
}

@media screen  and (max-width: 576px) { 
    .items__item-img{
        min-width: 150px;
        margin-right: 20px;
    }
    .items__right {
        width: 100%;
        display: block;
    }
    .items__right-down {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .items__item-count {
        margin: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>