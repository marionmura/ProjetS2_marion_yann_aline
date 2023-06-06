<script setup lang="ts">
import { Collections } from '@/pocketbase-types';
import type { ArticlesResponse } from '@/pocketbase-types';

import { allArticleFavori } from '@/backend';
  
const listeArticles = await allArticleFavori()
</script>

<template>
  <h1 class="font-bold">articles favori</h1>
      <TemplatePreviewVue v-for="unArticle of listeArticles" v-bind= "{...unArticle}" :v-key="unArticle.id"/>
 </template>