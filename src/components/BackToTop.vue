<template >
<button  @click="scrolltoTop" id="topButton" class="dmtop">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>

</button>

</template>

<script setup>

import { onMounted } from 'vue';
import { useScrollTop } from '../stores/backToTop';

const store = useScrollTop();

function scrolltoTop()
{
 store.scrollToTop();
}

onMounted(()=>{
 store.onScroll();
});

</script>