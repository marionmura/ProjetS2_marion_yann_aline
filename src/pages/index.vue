<script setup lang="ts">
import { Collections } from '@/pocketbase-types';
import type { ArticlesResponse } from '@/pocketbase-types';
import TemplateArticle from '@/components/TemplateArticle.vue';
import { allArticles } from '@/backend';
const listeArticles = await allArticles()

// import Carrousel from '@/components/Carrousel.vue';
// const listecarrousel = await allcarrousel()

</script>

<template>
  <!-- <Carrousel v-for="carrousel of listecarrousel" v-bind= "{...carrousel}" :v-key="carrousel.id"/>
  <h1 class="font-bold">page accueil avec la liste des articles</h1> -->
 
   <main>
    <div class="flex gap-4 place-content-center">
      <button class="button-v activebutton" >tout</button>
      <button class="button-v activebutton">design</button>
      <button class="button-v activebutton">chat</button>
      <button class="button-v activebutton">art</button>
      <button class="button-v activebutton">tech</button>
      <button class="button-v activebutton">info</button>
    </div>

    <div class="grid grid-cols-1 place-items-center mx-8 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <TemplateArticle v-for="unArticle of listeArticles" v-bind= "{...unArticle}" :v-key="unArticle.id"/>
    </div>
     
   </main>
 </template>