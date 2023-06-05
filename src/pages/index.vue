<script setup lang="ts">
import TemplatePreview from '@/components/TemplatePreview.vue';

import { allArticles } from '@/backend';
import { IAdesign } from '@/backend';
import { IAchat } from '@/backend';
import { IAart } from '@/backend';
import { IAtech } from '@/backend';
import { IAinfo } from '@/backend';

const listeArticles = await allArticles();
const designArticles = await IAdesign();
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

    <div class="flex gap-4 place-content-center">
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen == 1}" @click="sectionOpen = 1">tout</button>
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen == 2}" @click="sectionOpen = 2">design</button>
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen == 3}" @click="sectionOpen = 3">chat</button>
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen == 4}" @click="sectionOpen = 4">art</button>
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen == 5}" @click="sectionOpen = 5">tech</button>
      <button class="button-v activebutton" :class="{'activebuttonclicked':sectionOpen == 6}" @click="sectionOpen = 6">info</button>
    </div>

    <ul class="grid grid-cols-1 place-items-center mx-8 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

      <div v-if="sectionOpen == 1">
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
      </div>

      <div v-if="sectionOpen == 2">
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
      </div>

      <div v-if="sectionOpen == 3">
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
      </div>

      <div v-if="sectionOpen == 4">
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
      </div>

      <div v-if="sectionOpen == 5">
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
      </div>

      <div v-if="sectionOpen == 6">
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
      </div>
      
    </ul>
     
   </main>
 </template>