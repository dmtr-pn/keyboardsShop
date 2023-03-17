import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Profile from '../views/Profile.vue'

const routes = [
    {
        path: '',
        name: 'Home',
        component: Home
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/products/:category',
        name: 'ProductsCategory',
        component: Products
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/registration', '/', '/products', '/cart', '/products/vortex', '/products/leopold', '/products/ducky', '/products/varmilo'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user_token');
  
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router
