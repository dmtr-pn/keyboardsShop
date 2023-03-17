<template>
    AdminProfile
</template>

<script>
import actions from '../services/user.js'

export default {
    name: 'AdminProfile',
    data() {
        return {

        }
    },
    mounted() {
        actions.adminGet().then(res => {
            if(res.data.response.data.role !== 'ADMIN') this.$router.push({path: '/'})
        }, err => {
            console.log(err);
        })
    }
}
</script>