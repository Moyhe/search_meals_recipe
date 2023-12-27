<template>
    <header class="bg-white shadow h-16 px-5 flex justify-between items-stretch sticky top-0 z-50">
      <router-link
      active-class=""
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full px-5 text-slate-500 font-bold"
      >
        Home
      </router-link>
      <div class="flex items-center  gap-1">
        <router-link
          active-class="active"
          :to="{ name: 'byName' }"
          class="inline-flex items-center px-2 h-10 rounded-lg transition-colors hover:bg-slate-500 hover:text-white"
        >
          Search Meals
        </router-link>
        <router-link
        active-class="active"
          :to="{ name: 'byLetter' }"
          class="inline-flex items-center px-2 h-10 rounded-lg transition-colors hover:bg-slate-500 hover:text-white"
        >
          Meals By Letter
        </router-link>
        <router-link
        active-class="active"
          :to="{ name: 'ingredients' }"
          class="inline-flex items-center px-2 h-10 rounded-lg transition-colors hover:bg-slate-500 hover:text-white"
        >
          Meals By Ingredients
        </router-link>
      </div>
    </header>
  </template>