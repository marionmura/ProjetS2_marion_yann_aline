<script setup lang="ts">
import TemplatePreview from '@/components/TemplatePreview.vue';

import { allArticles } from '@/backend';
import { IAmusic } from '@/backend';
import { IAchat } from '@/backend';
import { IAart } from '@/backend';
import { IAtech } from '@/backend';
import { IAinfo } from '@/backend';

const listeArticles = await allArticles();
const designArticles = await IAmusic();
const chatArticles = await IAchat();
const artArticles = await IAart();
const techArticles = await IAtech();
const infoArticles = await IAinfo();

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

    <div class="flex flex-col py-12 items-center lg:flex-row lg:justify-center lg:gap-14 lg:py-20">
      <div>
        <h1 class="font-cabin text-4xl mb-1">RepertorIA</h1>
        <h2>Le site qui répertorie toutes les IA</h2>
      </div>
      <div class="flex justify-center mt-5">
        <img class="h-36 w-fit lg:h-44" src="@/img/robot_accueil.png" alt="Robot de l'accueil">
      </div>
    </div>

    <div class="flex gap-4 place-content-center py-2">
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen == 1}" @click="sectionOpen = 1">tout</button>
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen == 2}" @click="sectionOpen = 2">musique</button>
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen == 3}" @click="sectionOpen = 3">chat</button>
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen == 4}" @click="sectionOpen = 4">art</button>
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen == 5}" @click="sectionOpen = 5">tech</button>
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen == 6}" @click="sectionOpen = 6">info</button>
    </div>

       <ul class="py-2 grid grid-cols-1 place-items-center lg:mx-16 md:grid-cols-2 md:mx-4 lg:grid-cols-4 gap-4 " v-if="sectionOpen == 1">
        <li v-for="unArticle of listeArticles" v-bind= "{...unArticle}">
          <RouterLink
              :to="{
                name: 'articles-id',
                params: {
                  id: unArticle.id
                }
              }"
            >
              <TemplatePreview  v-bind= "{...unArticle}" />
          </RouterLink>
        </li>
      </ul>

      <ul class="py-2 grid grid-cols-1 place-items-center mx-8 md:grid-cols-2 lg:grid-cols-3 gap-8 " v-if="sectionOpen == 2">
        <li v-for="unArticleDesign of designArticles" v-bind= "{...unArticleDesign}">
          <RouterLink
              :to="{
                name: 'articles-id',
                params: {
                  id: unArticleDesign.id
                }
              }"
            >
              <TemplatePreview  v-bind= "{...unArticleDesign}" />
          </RouterLink>
        </li>
      </ul>

      <ul class="py-2 grid grid-cols-1 place-items-center mx-8 md:grid-cols-2 lg:grid-cols-3 gap-8 " v-if="sectionOpen == 3">
        <li v-for="unArticleChat of chatArticles" v-bind= "{...unArticleChat}">
          <RouterLink
              :to="{
                name: 'articles-id',
                params: {
                  id: unArticleChat.id
                }
              }"
            >
              <TemplatePreview  v-bind= "{...unArticleChat}" />
          </RouterLink>
        </li>
      </ul>

      <ul class="py-2 grid grid-cols-1 place-items-center mx-8 md:grid-cols-2 lg:grid-cols-3 gap-8 " v-if="sectionOpen == 4">
        <li v-for="unArticleArt of artArticles" v-bind= "{...unArticleArt}">
          <RouterLink
              :to="{
                name: 'articles-id',
                params: {
                  id: unArticleArt.id
                }
              }"
            >
              <TemplatePreview  v-bind= "{...unArticleArt}" />
          </RouterLink>
        </li>
      </ul>

      <ul class="py-2 grid grid-cols-1 place-items-center mx-8 md:grid-cols-2 lg:grid-cols-3 gap-8 " v-if="sectionOpen == 5">
        <li v-for="unArticleTech of techArticles" v-bind= "{...unArticleTech}">
          <RouterLink
              :to="{
                name: 'articles-id',
                params: {
                  id: unArticleTech.id
                }
              }"
            >
              <TemplatePreview  v-bind= "{...unArticleTech}" />
          </RouterLink>
        </li>
      </ul>

      <ul class="py-2 grid grid-cols-1 place-items-center mx-8 md:grid-cols-2 lg:grid-cols-4 gap-8 " v-if="sectionOpen == 6">
        <li v-for="unArticleInfo of infoArticles" v-bind= "{...unArticleInfo}">
          <RouterLink
              :to="{
                name: 'articles-id',
                params: {
                  id: unArticleInfo.id
                }
              }"
            >
              <TemplatePreview  v-bind= "{...unArticleInfo}" />
          </RouterLink>
        </li>
      </ul>
      
     
   </main>
 </template>