<template>
    <div class="dark" id="dark" v-on:click="unDark()"></div>
    <Header />
    <router-view />
    <notifications position="top right"/>
</template>

<script>
import Header from './components/Header.vue'

export default {
    components: {
        Header
    },
    methods: {
        unDark() {
            this.$store.commit('setDark', false);
        }
    }
}
</script>

<style>
@import url('../public/style.css');
</style>