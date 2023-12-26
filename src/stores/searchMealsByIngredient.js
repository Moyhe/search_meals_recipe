
import { defineStore } from "pinia";
import axiosClient from '../axiosClient';

export let useGetMealsByIngredient = defineStore('mealsByIngredients', {

    state: () => {
        return {
            mealsByIngredient: [],
            ingredient: {},
        };
      },
      actions: {
       
        async searchMealsByIngredient(ingredient) {
           try {
            await axiosClient.get(`search.php?s=${ingredient}`)
            .then(({ data }) => {
              this.mealsByIngredient = data.meals
            })
           } catch (error) {
             throw new Error(error);
           }
        },
      
      }

}) 