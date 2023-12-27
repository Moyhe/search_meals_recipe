
import { defineStore } from "pinia";
import axiosClient from '../axiosClient';

export let useGetMealsByLetter = defineStore('mealsByLetters', {

    state: () => {
        return {
            mealsByLetter: [],
        };
      },
      actions: {
       
        async searchMealsByLetter(letter) {
           try {
            await axiosClient.get(`search.php?s=${letter}`)
            .then(({ data }) => {
              this.mealsByLetter = data.meals
            })
           } catch (error) {
              throw new Error(error);
           }
        },
      
      }
}) 