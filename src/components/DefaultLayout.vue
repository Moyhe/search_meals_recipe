<template>
  <navbar />
  <main>
    <div class="max-w-[1200px] mx-auto">
      <router-view />
    </div> 
  
    <back-to-top />

  </main>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import BackToTop from "./BackToTop.vue";
</script>
