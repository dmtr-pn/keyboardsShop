<template>
    <Transition name="modal">
        <div v-if="this.modalStore.modal" class="modal" id="modal">
            <div class="modal__inner">

               <div class="summary__name">Ваш заказ</div>
                <div class="summary__items">
                    <div class="summary__items-item">
                        <input type="text" class="summary__items-item-inpt" placeholder="Промокод">
                    </div>
                    <div class="summary__items-item">
                        <div class="summary__items-item-name">Промежуточный итог</div>
                        <div class="summary__items-item-num">{{this.totalPrice}} $</div>
                    </div>
                    <div class="summary__items-item">
                        <div class="summary__items-item-name">Скидка</div>
                        <div class="summary__items-item-num">0 $</div>
                    </div>

                    <div class="summary__items-item">
                        <div class="hrr"></div>
                    </div>

                    <div class="summary__items-item">
                        <div class="summary__items-item-name">Итого</div>
                        <div class="summary__items-item-num">{{this.totalPrice}} $</div>
                    </div>

                    <div class="summary__items-item">
                        <button class="main__info-change-btn" style="margin-top: 20px" v-on:click="buy()">Купить</button>
                    </div>
                </div>

            </div>
        </div>
    </Transition>
    <div class="container" style="margin-top: 20px">
        <div class="filter__mobile">
            <button type="submit" class="filter__mobile-btn" v-on:click="filter()">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 20.4333C16.3223 20.4333 16.1556 20.4053 16 20.3493C15.8445 20.2942 15.7 20.2 15.5667 20.0667L9.40004 13.9C9.1556 13.6556 9.03915 13.3498 9.05071 12.9827C9.06138 12.6165 9.18893 12.3111 9.43338 12.0667C9.67782 11.8222 9.98893 11.7 10.3667 11.7C10.7445 11.7 11.0556 11.8222 11.3 12.0667L16.5 17.2667L21.7334 12.0333C21.9778 11.7889 22.2836 11.672 22.6507 11.6827C23.0169 11.6942 23.3223 11.8222 23.5667 12.0667C23.8112 12.3111 23.9334 12.6222 23.9334 13C23.9334 13.3778 23.8112 13.6889 23.5667 13.9333L17.4334 20.0667C17.3 20.2 17.1556 20.2942 17 20.3493C16.8445 20.4053 16.6778 20.4333 16.5 20.4333Z" fill="black"/>
                </svg> Ваш заказ
            </button>
        </div>

        <div class="main">
            <div class="items__">

                <NoSome  v-if="!this.cartStore.cart[0]"/>

                <CartItem v-for="(item, index) in this.cartStore.cart" :key="item.id" :info="item" />

                
            </div>
            <div class="summary__">
                <div class="summary__name">Ваш заказ</div>
                <div class="summary__items">
                    <div class="summary__items-item">
                        <input type="text" class="summary__items-item-inpt" placeholder="Промокод">
                    </div>
                    <div class="summary__items-item">
                        <div class="summary__items-item-name">Промежуточный итог</div>
                        <div class="summary__items-item-num">{{this.totalPrice}} $</div>
                    </div>
                    <div class="summary__items-item">
                        <div class="summary__items-item-name">Скидка</div>
                        <div class="summary__items-item-num">0 $</div>
                    </div>

                    <div class="summary__items-item">
                        <div class="hrr"></div>
                    </div>

                    <div class="summary__items-item">
                        <div class="summary__items-item-name">Итого</div>
                        <div class="summary__items-item-num">{{this.totalPrice}} $</div>
                    </div>
                    <div class="summary__items-item">
                        <button class="main__info-change-btn" style="margin-top: 20px" v-on:click="buy()">Купить</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import {useCartStore} from "@/store/cart"
import {useModalStore} from "@/store/modal"
import {mapStores} from "pinia"
import CartItem from '../components/CartItem.vue'
import NoSome from '../components/NoSome.vue'
import products from '../services/user.js'

export default {
    name: "Cart",
    components: {
        CartItem,
        NoSome
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapStores(useCartStore, useModalStore),
        totalPrice() {
            let total = 0;

            for (let item of this.cartStore.cart) {
                total += item.price * item.count;
            }

            return total;
        }
    },
    methods: {
        filter() {
            if(!this.modal){
                this.modalStore.setDark(true)
            }else {
                this.modalStore.setDark(false)
            }
        },
        count_change(id, action){
            
        },
        buy() {
            products.buy(this.cartStore.cart).then(res => {
                if(res.data.response.errId) {
                    this.$notify({
                        title: "Внимание",
                        text: res.data.response.message,
                        duration: 5000,
                        type: 'warn',
                    });    
                }else {
                    this.$notify({
                        title: "Внимание",
                        text: res.data.response.message,
                        duration: 5000,
                        type: 'info',
                    });
                    this.cartStore.cart = []
                    this.cartStore.cartCount = 0
                }
            })
        }
    }
}
</script>

<style scoped>
.main__info-change-btn {
    width: 100%;
    padding: 10px 25px;
    background: linear-gradient(99.04deg, #353535 0.88%, #000000 100%);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    border: none;
}
.main {
    display: flex;
}
.items__ {
    width: 100%;
    margin-right: 50px;
}
.hrr {
    width: 100%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.2);
}
.filter__mobile {
    display: none;
    margin-bottom: 20px;
}
.filter__mobile-btn {
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    border: 2px solid #000000;
    border-radius: 10px;
    background-color: transparent;
}
.summary__ {
    min-width: 393px;
}

.summary__name {
    font-weight: 600;
    font-size: 32px;
}
.summary__items {
    margin-top: 20px;
}
.summary__items-item {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
}
.summary__items-item-inpt {
    width: 100%;
    background: #FAFAFA;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    padding: 10px 25px;
    font-size: 20px;
    border: none;
}
.summary__items-item-name {
    font-weight: 600;
    font-size: 20px;
}
.summary__items-item-num {
    font-weight: 600;
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
@media screen and (max-width: 768px) { 
    .filter__mobile {
        display: block;
    }
    .summary__ {
        display: none;
    }
    .items__ {
        margin-right: 0;
    }
}
</style>