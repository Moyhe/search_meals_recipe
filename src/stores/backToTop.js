
import { defineStore } from "pinia";


export let useScrollTop = defineStore('topButton', {

      actions: {
       
         onScroll() {
          const topBtn = document.querySelector("#topButton");

          window.onscroll = () => {
            (window.scrollY > 1) ? topBtn.style.bottom = "60px" : topBtn.style.bottom = "-100px";
    
        }
        
        },

          scrollToTop() {
         
           window.scrollTo({top: 0, behavior: 'smooth'}) 

         }

      }

}) 

