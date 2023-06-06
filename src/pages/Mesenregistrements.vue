<script setup lang="ts">
import { Collections } from '@/pocketbase-types';
import type { ArticlesResponse } from '@/pocketbase-types';

import TemplatePreview from '@/components/TemplateArticle.vue';

import { allArticleSave } from '@/backend';
  
const listeArticles = await allArticleSave()
</script>

<template>
  <h1 class="font-bold">articles enregistrés</h1>
 
   <main>
     <TemplatePreview v-for="unArticle of listeArticles" v-bind= "{...unArticle}" :v-key="unArticle.id"/>
   </main>
 </template>