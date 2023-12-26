<template>
    <a
      :href="href"
      target="_blank"
      class="px-3 py-2 rounded border-2 text-white border-slate-600 bg-slate-500 hover:bg-slate-600 transition-colors"
    >
      <slot>YouTube</slot>
    </a>
  </template>
  
  <script setup>
  const props = defineProps({
    href: String
  })
  </script>