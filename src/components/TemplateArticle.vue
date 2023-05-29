<script setup lang="ts">
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
        <h2 class="font-bold p-1">{{ nom }}</h2>
        <p class="font-light px-1">{{ paragraphe }} </p>
        <p class="flex justify-end px-2">en lire plus</p>
      </div>
      
      <img class="w-[285px] h-[133px] border-2 border-violet left-[-1px] top-[-1px] object-cover rounded-lg " :src="urlImg"/>
      
    </div>
    <div class="pb-8"></div>
</template>

<!--object cover permet d'avoir une image recadrée mais pas déformée :)-->