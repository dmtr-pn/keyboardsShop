<template>
    <Transition name="modal">
        <div v-if="this.modalStore.modal" class="modal" id="modal">
            <div class="modal__inner">

                
                <div class="mobile-filter__">
                    
                    <div class="filter__section">
                        <div class="filter__section-name">Размер</div>
                        <div class="filter__section-body">
                            <input type="checkbox" class="hide" id="100" v-model="filterSize" value="100" autocomplete="off" checked/>
                            <label class="filter__section-body-item" for="100">100%</label>

                            <input type="checkbox" class="hide" id="btn-check" v-model="filterSize" value="90" autocomplete="off" />
                            <label class="filter__section-body-item" for="btn-check">90%</label>

                            <input type="checkbox" class="hide" id="80" v-model="filterSize" value="80" autocomplete="off" />
                            <label class="filter__section-body-item" for="80">80%</label>

                            <input type="checkbox" class="hide" id="75" v-model="filterSize" value="75" autocomplete="off" />
                            <label class="filter__section-body-item" for="75">75%</label>

                            <input type="checkbox" class="hide" id="65" v-model="filterSize" value="65" autocomplete="off" />
                            <label class="filter__section-body-item" for="65">65%</label>

                            <input type="checkbox" class="hide" id="60" v-model="filterSize" value="60" autocomplete="off" />
                            <label class="filter__section-body-item" for="60">60%</label>
                            
                            <input type="checkbox" class="hide" id="40" v-model="filterSize" value="40" autocomplete="off" />
                            <label class="filter__section-body-item" for="40">40%</label>
                            
                            <input type="checkbox" class="hide" id="20" v-model="filterSize" value="20" autocomplete="off" />
                            <label class="filter__section-body-item" for="20">20%</label>
                        </div>
                    </div>
                </div>
                <button v-on:click="test()" type="submit" class="filter__button">Применить</button>

            </div>
        </div>
    </Transition>
    <div class="container" style="margin-top: 20px">
        <div class="filter__mobile">
            <button type="submit" class="filter__mobile-btn" v-on:click="filter()">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 20.4333C16.3223 20.4333 16.1556 20.4053 16 20.3493C15.8445 20.2942 15.7 20.2 15.5667 20.0667L9.40004 13.9C9.1556 13.6556 9.03915 13.3498 9.05071 12.9827C9.06138 12.6165 9.18893 12.3111 9.43338 12.0667C9.67782 11.8222 9.98893 11.7 10.3667 11.7C10.7445 11.7 11.0556 11.8222 11.3 12.0667L16.5 17.2667L21.7334 12.0333C21.9778 11.7889 22.2836 11.672 22.6507 11.6827C23.0169 11.6942 23.3223 11.8222 23.5667 12.0667C23.8112 12.3111 23.9334 12.6222 23.9334 13C23.9334 13.3778 23.8112 13.6889 23.5667 13.9333L17.4334 20.0667C17.3 20.2 17.1556 20.2942 17 20.3493C16.8445 20.4053 16.6778 20.4333 16.5 20.4333Z" fill="black"/>
                </svg>Фильтр</button>
        </div>
        <div class="main">
            <div class="filter__">
                <div class="filter__section">
                    <div class="filter__section-name">Размер</div>
                    <div class="filter__section-body">
                        <input type="checkbox" class="hide" id="100" v-model="filterSize" :value="100" autocomplete="off" checked/>
                        <label class="filter__section-body-item" for="100">100%</label>

                        <input type="checkbox" class="hide" id="btn-check" v-model="filterSize" :value="90" autocomplete="off" />
                        <label class="filter__section-body-item" for="btn-check">90%</label>

                        <input type="checkbox" class="hide" id="80" v-model="filterSize" :value="80" autocomplete="off" />
                        <label class="filter__section-body-item" for="80">80%</label>

                        <input type="checkbox" class="hide" id="75" v-model="filterSize" :value="75" autocomplete="off" />
                        <label class="filter__section-body-item" for="75">75%</label>

                        <input type="checkbox" class="hide" id="65" v-model="filterSize" :value="65" autocomplete="off" />
                        <label class="filter__section-body-item" for="65">65%</label>

                        <input type="checkbox" class="hide" id="60" v-model="filterSize" :value="60" autocomplete="off" />
                        <label class="filter__section-body-item" for="60">60%</label>
                        
                        <input type="checkbox" class="hide" id="40" v-model="filterSize" :value="40" autocomplete="off" />
                        <label class="filter__section-body-item" for="40">40%</label>
                        
                        <input type="checkbox" class="hide" id="20" v-model="filterSize" :value="20" autocomplete="off" />
                        <label class="filter__section-body-item" for="20">20%</label>
                    </div>
                </div>

                <button type="submit" class="filter__button" v-on:click="test()">Применить</button>
            </div>
            <div class="main__">
                <NoSome  v-if="!this.filteredDatas[0]"/>

                <ProductItem  v-for="item in filteredDatas" v-bind:key="item.id" v-bind:info="item" />

            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import {useModalStore} from "@/store/modal"
import {mapStores} from "pinia"

import ProductItem from '../components/ProductItem.vue'
import NoSome from '../components/NoSome.vue'
import Footer from '../components/Footer.vue'
import products from '../services/user.js'

export default {
    name: "Products",
    components: {
        ProductItem,
        NoSome,
        Footer
    },
    data() {
        return{
            filterSize: [100],
            filterCurrency: "USD",
            datas: [],
            filteredDatas: []
        }
    },
    computed: {
        ...mapStores(useModalStore)
    },
    methods: {
        filter() {
            if(!this.modal){
                this.modalStore.setDark(true)
            }else {
                this.modalStore.setDark(false)
            }
        },
        test() {
            this.filteredDatas = []
            this.datas.map(r => {
                if(this.filterSize.includes(r.size)){
                    this.filteredDatas.push(r)
                }
            })
            console.log(this.filteredDatas);
        }
    },
    mounted() {
        products.productsGet(this.$route.params.category).then(resp => {
            this.datas = resp.data.response.data
            this.filteredDatas = this.datas
            console.log(resp.data.response.message)
        }, err => {
            console.log(err);
        })  
    },
    watch: {
        '$route' (to, from) {
            products.productsGet().then(resp => {
                this.datas = resp.data.response.data
                this.filteredDatas = this.datas
                console.log(resp.data.response.message)
            }, err => {
                console.log(err);
            })  
        }
    }
}
</script>

<style scoped>
.filter__section-body-sel {
    font-weight: 400;
    font-size: 24px;
    padding: 10px 20px;
    border: 2px solid #EAE9E9;
    border-radius: 10px;
}
.filter__section-bodys {
    display: flex;
    justify-content: space-between;
}
.filter__button {
    font-weight: 700;
    font-size: 20px;
    background: linear-gradient(99.04deg, #353535 0.88%, #000000 100%);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    color: #fff;
    padding: 10px;
    width: 100%;
    margin-top: 10px;
}
.min-max {
    display: flex;
    align-items: center;
    margin-left: 20px;
}
.to {
    font-weight: 700;
    font-size: 24px;
    margin: 0 10px;
}
.minm {
    width: 45px;
    font-weight: 400;
    font-size: 24px;
    padding: 10px 20px;
    border: 2px solid #EAE9E9;
    border-radius: 10px;
}

.hide {
    position: absolute;
    clip: rect(0,0,0,0);
    pointer-events: none;
}
.filter__section-body-item:hover {
    cursor: pointer;
}
.filter__section-body-item {
    font-weight: 400;
    font-size: 16px;
    padding: 10px;
    border: 2px solid #000000;
    border-radius: 10px;
    user-select: none;
}
.filter__section-body input:checked + label{
    background: linear-gradient(113.3deg, #353535 0%, #000000 100%);
    color: #fff ;
}

.filter__section-name {
    font-weight: 600;
    font-size: 32px;
}
.filter__section-body {
    gap: 10px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 20px;
}

.modal-enter-active, .modal-leave-active {
	transition: all 0.3s ease-in-out;
}
.modal-enter-from,
.modal-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
.modal {
    position: fixed;
    z-index: 999;
    bottom: 0px;
    width: 100%;
    background: #fff;
    border-radius: 25px 25px 0 0;
}
.modal__inner {
    padding: 40px 20px;
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
.main {
    display: flex;
    flex-direction: row;
}
.filter__ {
    min-width: 335px;
    margin-right: 20px;
}
.main__ {
    width: 100%;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
}   
@media screen  and (max-width: 768px) { 
    .filter__ {
        display: none;
    }
    .filter__mobile {
        display: block;
    }
}
</style>