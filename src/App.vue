<script setup lang="ts">
import { RouterView } from 'vue-router';
import FooterPage from './components/FooterPage.vue'
import HeaderPage from './components/HeaderPage.vue';
</script>

<template>

  <header>
    <HeaderPage/>
  </header>

  <RouterView />

  <FooterPage/>
</template>
