import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
    state: () => {
        return { 
            isDark: false,
            modal: false
        }
    },
    actions: {
        setDark(set)  {
            this.isDark = set;
            this.modal = set;
            if(set) {
                document.getElementById("app").classList.add("blur")
                document.getElementById("dark").classList.add("actv")
            } else {
                document.getElementById("app").classList.remove("blur")
                document.getElementById("dark").classList.remove("actv")
            }
        },
    },
})