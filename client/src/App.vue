<template>
    <div class="dark" id="dark" v-on:click="unDark()"></div>
    <Header />
    <router-view />
    <notifications position="top right"/>
</template>

<script>
import {useModalStore} from "@/store/modal"
import {mapStores} from "pinia"

import Header from './components/Header.vue'

export default {
    components: {
        Header
    },
    computed: {
        ...mapStores(useModalStore)
    },
    methods: {
        unDark() {
            this.modalStore.setDark(false)
        }
    }
}
</script>

<style>
@import url('../public/style.css');
</style>