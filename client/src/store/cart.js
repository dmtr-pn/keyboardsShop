import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        return { 
            cart: [],
            cartCount: 0
        }
    },
    actions: {
        addToCart(item) {
            let a = {
                id: item.id,
                name: item.name,
                price: item.cost,
                img: `url(${require('@/assets/'+ item.img +'')})`,
                count: 1
            }
            
            let found = this.cart.find(product => product.id == item.id);

            if (found) {
                found.count ++;
            } else {
                this.cart.push(a);
            }

            this.cartCount++;
        },
        removeFromCart(item) {
            let index = this.cart.indexOf(item);
        
            if (index > -1) {
                let product = this.cart[index];
                this.cartCount -= product.count;
        
                this.cart.splice(index, 1);
            }
        },
        countAdd(item){
            let found = this.cart.find(product => product.id == item.id);

            if(found) found.count++;
        },
        countRemove(item){
            let found = this.cart.find(product => product.id == item.id);

            if(found) {
                if(found.count == 1){
                    this.removeFromCart(item)
                }else {
                    found.count--;
                }
            }
        }
    },
})