<script setup lang="ts">
  import type { ArticlesResponse } from '@/pocketbase-types'
  // import TemplateArticle from '@/components/TemplateArticle.vue'
  import { allArticles } from '@/backend';
  
  const listeArticles = await allArticles()
</script>

<template>
    <h1>Page d'accueil</h1>
    <RouterLink to="/aPropos">À Propos</RouterLink>
    <RouterLink to="/Connexion">Connexion</RouterLink>

    <!-- <TemplateArticle v-for="article of listeArticles" :v-key="article.id" v-bind="{ ...article }" /> -->
  </template>