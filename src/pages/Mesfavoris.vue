<script setup lang="ts">
import { Collections } from '@/pocketbase-types';
import type { ArticlesResponse } from '@/pocketbase-types';

import { allArticleFavori } from '@/backend';
  
const listeArticles = await allArticleFavori()
</script>

<template>

  <br>
  <br>
  <br>
  <h1 class="font-bold">articles favori</h1>
 
   <main>
     <TemplatePreviewVue v-for="unArticle of listeArticles" v-bind= "{...unArticle}" :v-key="unArticle.id"/>
   </main>
 </template>