
import { defineStore } from "pinia";
import axiosClient from '../axiosClient';

export let useSearchMeals = defineStore('searchMeals', {

    state: () => {
        return {
         
          searchedMeals: [] ,
         
        };
      },
      actions: {
       
        async searchMeals(keyword) {
           try {
            await axiosClient.get(`search.php?s=${keyword}`)
          .then(({ data }) => {
            this.searchedMeals = data.meals
          })
           } catch (error) {
             throw new Error(error);
           }
        },
      
      }

}) 

