<template>
    <div class="dark" id="dark" v-on:click="unDark()"></div>
    <Header />
    <router-view />
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