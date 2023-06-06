<script setup lang="ts">
import { allArticles, allArticlesCategories, pb } from '@/backend';
import type { ArticlesResponse } from '@/pocketbase-types';

import Ampouleicon from '@/components/icons/Ampouleicon.vue';

const props: ArticlesResponse = defineProps<ArticlesResponse>();
const img0= props.image
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })

const listeArticles = await allArticles();
// const listeArticlesCategories = await allArticles({{  }});
</script>

<template>

    <main class="pt-10 lg:pt-0 bg-grisbg text-white lg:grid lg:grid-cols-3 lg:px-20">
    <div class="bg-grisfooter rounded-3xl mt-32 lg:col-span-2 mb-12 ">
        <div class="px-10 pb-20 pt-20  ">

        <div class="-mt-20 lg:grid lg:grid-cols-2 lg:gap-4">
            <img class="relative -top-10 h-60 object-cover w-full rounded-3xl lg:w-100 lg:h-60" :src="urlImg" alt="Image principale de l'article">
           
            <div class="grid grid-cols-1 gap-4 lg:relative lg:top-5 lg:mt-20">  
                    <h1 class=" lg:relative lg:col-start-2 lg:bottom-5">{{ nom_IA }}</h1>
                    <div class="col-end-11 lg:relative lg:bottom-5"><svg width="25" height="30" viewBox="0 0 16 20" fill="none" :class="{'fill-violet': enregistrement }" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13.2201 1.3235C14.2468 1.45149 15 2.4004 15 3.50831V19L8 15.2503L1 19V3.50831C1 2.4004 1.75227 1.45149 2.77987 1.3235C6.24831 0.892168 9.75169 0.892168 13.2201 1.3235Z" stroke="#92A1FF" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></div>
                        <div class="col-end-12 lg:relative lg:bottom-5"><svg width="30" height="30" viewBox="0 0 22 20" fill="none" :class="{'fill-white': favori }" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5.90909C21 3.19818 18.6678 1 15.7911 1C13.6411 1 11.7944 2.22836 11 3.98145C10.2056 2.22836 8.35889 1 6.20778 1C3.33333 1 1 3.19818 1 5.90909C1 13.7855 11 19 11 19C11 19 21 13.7855 21 5.90909Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></div>
                   
              <p class=" text-violet col-span-12 lg:relative lg:bottom-20 lg:col-start-2"> Conçu par {{ concepteur_IA }}  </p>     
            </div>
        </div>  
            
            <h3 class=" mt-8">Fonctionnalités : </h3>
                <li>{{ fonctionnalites_1 }}</li>
                <li> {{ fonctionnalites_2 }}</li>
                <li> {{ fonctionnalites_3 }}</li>
                
            <h2 class=" mt-8">Pourquoi utiliser {{ nom_IA }} ?</h2>
            <p>
               {{ utilisation }}
            </p>

            <h2 class=" mt-8">Version {{ nom_IA }} premium disponible</h2>
            <p>
                {{ premium }}      
            </p>

                <div class="flex flex-row gap-4 mt-8">
                    <icon><Ampouleicon /></icon>
                    <h2>Comment utiliser {{ nom_IA }} - tuto aide</h2>
              </div>
            <p>
                {{ tuto_pour_utilisation }}
            </p>
        </div>
    </div>

        <div class="space-y-2 lg:mt-40">
            <h2 class="text-violet mt-8 text-center lg:text-white lg:font-cabin lg:text-2xl lg:uppercase font-medium">Articles similaires</h2>
            <hr class="text-violet pb-8 text-center lg:relative lg:left-20 lg:ml-30 lg:border-t-2">

            <!-- <ul class="py-2 grid grid-cols-1 place-items-center lg:mx-16 md:grid-cols-2 md:mx-4 lg:grid-cols-4 gap-4">
                    <li v-for="unAutre of await allArticlesCategories({{ categorie }})" v-bind= "{...unFavori}">
                        <RouterLink
                            :to="{
                            name: 'articles-id',
                            params: {
                            id: unFavori.id
                            }
                            }"
                        >
                            <TemplatePreview  v-bind= "{...unFavori}" />
                        </RouterLink>
                    </li>
            </ul> -->
        </div>
        
    </main>
</template>