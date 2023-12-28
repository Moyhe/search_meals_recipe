<template>
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-slate-500">Meals by Letter</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
      <router-link
        active-class=""
        :to="{ name: 'byLetter', params: { letter } }"
         v-for="letter of letters"
        :key="letter"
        class="w-2 h-2 flex items-center justify-center hover:text-slate-500 hover:scale-150 transition-all"
      >
        {{ letter }}
      </router-link>
    </div>
  
    <Meals :meals="meals" />

  </template>
  
  <script setup>

  import { computed } from "@vue/reactivity";
  import { onMounted, watch } from "vue";
  import { useRoute } from "vue-router";
  import { useGetMealsByLetter } from '../stores/searchMealsByLetter';
  import Meals from "../components/Meals.vue";
  
  const store = useGetMealsByLetter();

  const route = useRoute();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const meals = computed(() =>  store.mealsByLetter || []);
  
  watch(route, () => {
    store.searchMealsByLetter(route.params.letter);
  });
  
  onMounted(() => {
    store.searchMealsByLetter(route.params.letter);
  });

  </script>