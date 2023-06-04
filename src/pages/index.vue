<script setup lang="ts">
import { Collections } from '@/pocketbase-types';
import type { ArticlesResponse } from '@/pocketbase-types';
import TemplateArticle from '@/components/TemplateArticle.vue';
import { allArticles } from '@/backend';
const listeArticles = await allArticles()

// import Carrousel from '@/components/Carrousel.vue';
// const listecarrousel = await allcarrousel()
//buttons interactifs 
import { ref } from 'vue';
const sectionOpen = ref(1)
</script>

<template>
  <!-- <Carrousel v-for="carrousel of listecarrousel" v-bind= "{...carrousel}" :v-key="carrousel.id"/>
  <h1 class="font-bold">page accueil avec la liste des articles</h1> -->
 
   <main>
    <div class="flex gap-4 place-content-center">
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen}" @click="sectionOpen =1">tout</button>
      <button class="button-v activebutton" @click="sectionOpen =2">design</button>
      <button class="button-v activebutton"  @click="sectionOpen =3">chat</button>
      <button class="button-v activebutton"  @click="sectionOpen =4">art</button>
      <button class="button-v activebutton"  @click="sectionOpen =5">tech</button>
      <button class="button-v activebutton"  @click="sectionOpen =6">info</button>
    </div>

    <ul class="grid grid-cols-1 place-items-center mx-8 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <li v-for="unArticle of listeArticles" v-bind= "{...unArticle}" :v-key="unArticle.id">
        <RouterLink
              :to="{
                name: 'articles-id',
                params: {
                  id: unArticle.id
                }
              }"
            >
        <TemplateArticle  v-bind= "{...unArticle}" />
      </RouterLink>
      </li>
      
    </ul>
     
   </main>
 </template>