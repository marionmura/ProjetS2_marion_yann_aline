<script setup lang="ts">
import arrowright from './icons/Arrowright.vue';
import Likeicon from './icons/Likeicon.vue';
import Saveicon from './icons/Saveicon.vue';
import { pb } from '@/backend' ;
import type { ArticlesResponse } from '@/pocketbase-types'

const props: ArticlesResponse = defineProps<ArticlesResponse>()

const img0= props.image
// // si pas d'image (undefined) garde undefined
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })
</script>

<template>
    <div class="relative w-[285px] h-[132px]  rounded-lg">
      <div class="absolute w-[285px] h-[132px] ">
        <div class="flex flex-row justify-between">
          <h2 class="font-bold pt-2 pl-2">{{ nom }}</h2>
          <div class="flex gap-2 m-2">
            <Saveicon/>
            <Likeicon/>
          </div>
          
        </div>
        
        <p class="font-light px-2">{{ paragraphe }} </p>
        <div class="flex justify-end px-2 items-center gap-2">
          <p class="font-light">en lire plus</p>
          <arrowright/>
        </div>
        
      </div>
      
      <img class="w-[285px] h-[133px] border-2 border-violet left-[-1px] top-[-1px] object-cover rounded-lg " :src="urlImg"/>
      
    </div>
    <div class="pb-8"></div>
</template>

<!--object cover permet d'avoir une image recadrée mais pas déformée :)-->