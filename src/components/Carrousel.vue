<script setup lang="ts">
import { pb } from '@/backend' ;
import { Collections } from '@/pocketbase-types';
import type { CarrouselResponse } from '@/pocketbase-types';
  
const props: CarrouselResponse = defineProps<CarrouselResponse>()

const img0= props.image
// // si pas d'image (undefined) garde undefined
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })


</script>


<template>
<!--     
    le carroussel de l'index
    <main>
        {{ titre }}
        {{ description }}
        <img :src="urlImg"/>
            
        
        
    </main> -->
</template>