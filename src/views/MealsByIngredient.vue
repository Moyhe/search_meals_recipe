<template>
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-slate-500">Meals for {{ ingredient.strIngredient }}</h1>
    </div>
  
    <Meals :meals="meals" />
  </template>
  
  <script setup>
  import { computed } from "@vue/reactivity";
  import { onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { useGetMealsByIngredient } from '../stores/searchMealsByIngredient';
  import Meals from '../components/Meals.vue'
  

  const store = useGetMealsByIngredient();

  const route = useRoute();
  const ingredient = computed(() => store.ingredient || [])
  const meals = computed(() => store.mealsByIngredient || [])
  
  onMounted(() => {
    store.searchMealsByIngredient(route.params.ingredient)
  })
  
  </script>