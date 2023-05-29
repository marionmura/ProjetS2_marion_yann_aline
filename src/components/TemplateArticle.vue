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
        <p class="font-bold">{{ nom }}</p>
        <p class="font-light">{{ paragraphe }} </p>
      </div>
      <img class="w-[285px] h-[131px] border-2 border-violet left-[-1px] top-[-1px] object-cover rounded-lg " :src="urlImg"/>
      
    </div>
    <div class="pb-8"></div>
</template>

<!--object cover permet d'avoir une image recadrée mais pas déformée :)-->