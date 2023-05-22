<script setup lang="ts">
import { RouterView } from 'vue-router';
import FooterPage from './components/FooterPage.vue'
import HeaderPage from './components/HeaderPage.vue';
import TemplateArticle from './components/TemplateArticle.vue';
</script>

<template>

  <HeaderPage/>
  <br>
  <br>
  <br>
  <br>
  <br>

  <FooterPage/>

  <RouterView />

</template>
