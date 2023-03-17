import { createStore } from 'vuex'
import auth from '../services/auth';
import router from '../router';

export default createStore({
    state: {
        isDark: false,
        logged: {
            status: localStorage.getItem('user_token') ? true : false
        },
        cart: [],
        cartCount: 0
    },
    getters: {
        getDark: state => {
        return state.isDark;
        }
    },
    mutations: {
        setDark: (state, set) => {
            state.isDark = set;
            if(set) {
                document.getElementById("app").classList.add("blur")
                document.getElementById("dark").classList.add("actv")
            } else {
                document.getElementById("app").classList.remove("blur")
                document.getElementById("dark").classList.remove("actv")
            }
        },
        loginSuccess(state) {
            state.logged.status = true;
        },
        loginFailure(state) {
            state.logged.status = false;
        },
        logout(state) {
            state.logged.status= false;
        },
        addToCart(state, item) {
            let a = {
                id: item.id,
                name: item.name,
                price: item.cost,
                img: `url(${require('@/assets/'+ item.img +'')})`,
                count: 1
            }
            
            let found = state.cart.find(product => product.id == item.id);

            if (found) {
                found.count ++;
            } else {
                state.cart.push(a);
            }

            state.cartCount++;
        },
        removeFromCart(state, item) {
            let index = state.cart.indexOf(item);
        
            if (index > -1) {
                let product = state.cart[index];
                state.cartCount -= product.count;
        
                state.cart.splice(index, 1);
            }
        },
        countAdd(state, item){
            let found = state.cart.find(product => product.id == item.id);

            if(found) found.count++;
        },
        countRemove(state, item){
            let found = state.cart.find(product => product.id == item.id);

            if(found) {
                if(found.count == 1){
                    this.commit('removeFromCart', item)
                }else {
                    found.count--;
                }
            }
        }
    },
    actions: {
        login({commit}, user_info) {

            return auth.login(user_info).then(user => {
                commit('loginSuccess')

                return Promise.resolve(user)
            }, err => {
                commit('loginFailure')

                return Promise.reject(err)
            })
            
        },
        registration({commit}, user_info) {

            return auth.registration(user_info).then(user => {
                commit('loginSuccess')

                return Promise.resolve(user)
            }, err => {
                commit('loginFailure')

                return Promise.reject(err)
            })
            
        },
        logout({commit}) {
            auth.logout();
            commit('logout');

            router.push('/login')
        }
    },
    modules: {
    }
})
