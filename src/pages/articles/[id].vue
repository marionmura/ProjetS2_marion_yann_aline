<script setup lang="ts">
import Likeicon from '@/components/icons/Likeicon.vue';
import Saveicon from '@/components/icons/Saveicon.vue';
import Ampouleicon from '@/components/icons/Ampouleicon.vue';

import { pb } from '@/backend' ;
import type { ArticlesResponse } from '@/pocketbase-types'

import { oneIA } from "@/backend";
const props = defineProps<ArticlesResponse>()
const uneoeuvre = await oneIA(props.id)
</script>

<template>

    <main class="pt-20 bg-grisbg text-white lg:grid lg:grid-cols-3 lg:px-20">
    <div class="bg-grisfooter rounded-3xl mt-32 lg:col-span-2 mb-12">
        <div class="px-10 pb-20 pt-40  ">

        <div class="-mt-40 lg:grid lg:grid-cols-2 lg:gap-4">
            <img class="relative -top-10 h-60 object-cover w-full rounded-3xl lg:w-72 lg:h-60" src="" alt="Image principale de l'article">
           
            <div class="grid grid-cols-6 gap-4 lg:relative lg:top-5 ">
                    <p class="col-span-12 hidden lg:block "> #tech • #robot •  #IA  </p>     
                    <h1 class=" lg:relative lg:col-start-2 lg:bottom-5">Midjourney</h1>
                        <div class="col-end-11 lg:relative lg:bottom-5"><Saveicon /></div>
                        <div class="col-end-12 lg:relative lg:bottom-5"><Likeicon /></div>
                    <p class=" text-violet col-span-12 lg:relative lg:bottom-20 lg:col-start-2"> Conçu par Open AI  </p>     
            </div>
        </div>  
            
            <h3 class=" mt-8">Fonctionnalités : </h3>
                <li>IA générative</li>
                <li> IA artistique</li>
                <li> utilisation via discord</li>
                
            <h2 class=" mt-8">Pourquoi utiliser Midjourney ?</h2>
            <p>
                Vous avez des difficultés en dessin ou juste pour représenter vos idées ? Alors la solution est simple ! Midjourney vous aidera, à partir d'une simple description de ce que vous souhaitez l'IA peut générer 4 images de styles différents et vous avez juste choisir votre préférée pour l'améliorer. 
            </p>

            <h2 class=" mt-8">Version Midjourney premium disponible</h2>
            <p>
                fonctionnalités bonus :
                permet de générer de façon illimitée
                l'offre gratuite est limitée à 25 lots d'images        
            </p>

                <div class="flex flex-row gap-4 mt-8">
                    <icon><Ampouleicon /></icon>
                    <h2>Comment utiliser Midjourney - tuto aide</h2>
              </div>
            <p>
                Il faut au préalable avoir un compte discord
                allez sur le site de Midjourney
                défilez la page et cliquer sur “join our Discord”
                le site vous redirigera vers un serveur discord où il faudra vérifier le capchat

                Pour utiliser l'IA
                allez sur un salon nommé #newbies- (avec n'importe quel numéro)
                entrez la description de l'image que vous souhaitez générer
                attendre que l'IA génère l'image (1 minute environ)

                possibilité d'améliorer une des 4versions proposées en cliquant sur une réaction en fin de message
                possibilité d'améliorer l'image et de la retoucher
                terminez en enregistrant l'image

                Vous pouvez répéter cette opération 25 fois uniquement, pour pouvoir en faire plus il faudra acheter un des abonnements proposés : 
                un plan basique à 8 $/mois 
                un plan standart à 24 $/mois (permet de générer sans limitations)
                un plan pro à 48 $/mois (permet de générer sans limitations)

                Les 3 abonnements vous permettront de créer des images directement dans vos messages privés et non plus sur le channel discord accessible aux milliers d'utilisateurs.

                Retrouvez tout le mode d'emploi sur le site de Midjourney.
            </p>
        </div>
    </div>

        <div class="space-y-2 lg:mt-40">
            <h2 class="text-violet mt-8 text-center lg:text-white lg:font-cabin lg:text-2xl lg:uppercase font-medium">Articles similaires</h2>
            <hr class="text-violet pb-8 text-center lg:relative lg:left-20 lg:ml-30 lg:border-t-2">
        </div>
        
    </main>
</template>