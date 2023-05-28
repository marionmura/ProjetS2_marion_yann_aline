<script setup lang="ts">
import { Collections } from '@/pocketbase-types';
import type { ArticlesResponse } from '@/pocketbase-types';

import TemplateArticle from '@/components/TemplateArticle.vue';

import { allArticles } from '@/backend';
  
const listeArticles = await allArticles()
</script>

<template>

  <br>
  <br>
  <br>
  <h1 class="font-bold">page accueil avec la liste des articles</h1>
 
   <main>
     <!-- <TemplateArticle v-for="unArticle of listeArticles" v-bind= "{...unArticle}" :v-key="unArticle.id"/> -->
   </main>
 </template>