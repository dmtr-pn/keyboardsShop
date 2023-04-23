import { createRouter, createWebHistory } from 'vue-router'
import {useAuthStore} from "@/store/auth"

const routes = [
    {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
    },
    {
        path: '/products/:category',
        name: 'ProductsCategory',
        component: () => import('../views/Products.vue'),
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/registration',
        name: 'Registration',
        component:  () => import('../views/Registration.vue'),
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
        meta: {
            requiredAuth: true,
        },
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const requiredAuth = to.meta.requiredAuth;

    if(!authStore.checkAuth() && requiredAuth){
        next('/login'); 
    } else {
        next();
    }
});

export default router
