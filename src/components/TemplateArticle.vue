<script setup lang="ts">
import { pb } from '@/backend';
import type { ArticlesResponse } from '@/pocketbase-types';

import Likeicon from '@/components/icons/Likeicon.vue';
import Saveicon from '@/components/icons/Saveicon.vue';
import Ampouleicon from '@/components/icons/Ampouleicon.vue';

const props: ArticlesResponse = defineProps<ArticlesResponse>();
// const img0= props.image_artiste[1]
// const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })

</script>

<template>

    <main class="pt-20 bg-grisbg text-white lg:grid lg:grid-cols-3 lg:px-20">
    <div class="bg-grisfooter rounded-3xl mt-32 lg:col-span-2 mb-12">
        <div class="px-10 pb-20 pt-40  ">

        <div class="-mt-40 lg:grid lg:grid-cols-2 lg:gap-4">
            <img class="relative -top-10 h-60 object-cover w-full rounded-3xl lg:w-72 lg:h-60" src="" alt="Image principale de l'article">
           
            <div class="grid grid-cols-6 gap-4 lg:relative lg:top-5 ">
                    <p class="col-span-12 hidden lg:block "> #tech • #robot •  #IA  </p>     
                    <h1 class=" lg:relative lg:col-start-2 lg:bottom-5">{{ nom_IA }}</h1>
                        <div class="col-end-11 lg:relative lg:bottom-5"><Saveicon /></div>
                        <div class="col-end-12 lg:relative lg:bottom-5"><Likeicon /></div>
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
        </div>
        
    </main>
</template>