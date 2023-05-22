<script setup lang="ts">
  import { Collections } from '../pocketbase-types'
  import TemplateArticle from '@/components/TemplateArticle.vue'
  import type { ArticlesRecord } from '../pocketbase-types'
</script>

<template>
    <h1>Page d'accueil</h1>
    <RouterLink to="/aPropos">À Propos</RouterLink>
    <RouterLink to="/Connexion">Connexion</RouterLink>

    <TemplateArticle v-for="uneMaison in maisonsListe" :v-key="uneMaison.id" v-bind="{ ...uneMaison }" />
  </template>