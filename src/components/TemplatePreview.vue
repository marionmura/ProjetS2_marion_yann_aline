<script setup lang="ts">
import arrowright from './icons/Arrowright.vue';
// import Likeicon from './icons/Likeicon.vue';
// import Saveicon from './icons/Saveicon.vue';
import { pb } from '@/backend' ;
import type { ArticlesResponse } from '@/pocketbase-types'

const props: ArticlesResponse = defineProps<ArticlesResponse>()

const img0= props.image
// // si pas d'image (undefined) garde undefined
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })


</script>

<template>
    <div class="relative w-[285px] h-[132px] rounded-lg lg:w-[320px] lg:h-[280px]">
      <div class="absolute w-[285px] h-[132px] lg:w-[320px] lg:h-[260px] lg:flex lg:flex-col lg:justify-around ">
        <div class="flex flex-row justify-between items-center">
          <h2 class="font-bold pt-2 pl-2 lg:pl-4">{{ nom }}</h2>


          <div class="flex gap-2 m-2">
            <div class="lg:w-[20px] lg:h-auto">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" :class="{'fill-violet': enregistrement }" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2201 1.3235C14.2468 1.45149 15 2.4004 15 3.50831V19L8 15.2503L1 19V3.50831C1 2.4004 1.75227 1.45149 2.77987 1.3235C6.24831 0.892168 9.75169 0.892168 13.2201 1.3235Z" stroke="#92A1FF" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <div class="">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" :class="{'fill-white': favori }" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 5.90909C21 3.19818 18.6678 1 15.7911 1C13.6411 1 11.7944 2.22836 11 3.98145C10.2056 2.22836 8.35889 1 6.20778 1C3.33333 1 1 3.19818 1 5.90909C1 13.7855 11 19 11 19C11 19 21 13.7855 21 5.90909Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          
        </div>
        
        <p class="font-light px-2 lg:px-4">{{ paragraphe }} </p>
        <div class="flex justify-end px-2 items-center gap-2">
          <p class="font-light">en lire plus</p>
          <arrowright/>
        </div>
        
      </div>
      
      <img class="w-[285px] h-[133px] lg:w-[320px] lg:h-[260px] border-2 border-violet left-[-1px] top-[-1px] object-cover rounded-lg " :src="urlImg"/>
      
    </div>
</template>

<!--object cover permet d'avoir une image recadrée mais pas déformée :)
soucis pour colorer le svg lorsqu'il est liké ou enregistré donc svg directement ici-->