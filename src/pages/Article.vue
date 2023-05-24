<script setup lang="ts">
import Like from '../components/icons/Like.vue';
import Save from '../components/icons/Save.vue';
import Ampouleicon from '../components/icons/Ampouleicon.vue';
</script>

<template>
    <main class="pt-20 bg-grisbg text-white  ">
    
    <div class="bg-grisfooter rounded-3xl mt-32">
    
            <img class="relative -top-10 h-32 object-cover w-full px-3 " src="../img/robot_2.webp" alt="Image principale de l'article">
        
            <div class="px-10 pb-20 pt-40 -mt-40">
                
                <div class="grid grid-cols-6 gap-4 ">
                    <h1 class="col-start-1 col-span-1">Midjourney</h1>
                    <div class="col-end-11 col-span-1"><Save /></div>
                    <div class="col-end-12 col-span-1"><Like /></div>
                </div>
              <p class=" mt-6 text-violet"> Conçu par Open AI  </p>     
              
            <h3 class=" mt-8">Fonctionnalités : </h3>
                <li>IA générative</li>
                <li> IA artistique</li>
                <li> utilisation via discord</li>
                
            <h2 class=" mt-8">Pourquoi utiliser Midjourney ?</h2>
            <p>
                Vous avez des difficultés en dessin ou juste pour représenter vos idées ? Alors la solution est simple ! Midjourney vous aidera, à partir d’une simple description de ce que vous souhaitez l’IA peut générer 4 images de styles différents et vous avez juste choisir votre préférée pour l’améliorer. 
            </p>

            <h2 class=" mt-8">Version Midjourney premium disponible</h2>
            <p>
                fonctionnalités bonus :
                permet de générer de façon illimitée
                l’offre gratuite est limitée à 25 lots d’images        
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

                Pour utiliser l’IA
                allez sur un salon nommé #newbies- (avec n’importe quel numéro)
                entrez la description de l’image que vous souhaitez générer
                attendre que l’IA génère l’image (1 minute environ)

                possibilité d’améliorer une des 4versions proposées en cliquant sur une réaction en fin de message
                possibilité d’améliorer l’image et de la retoucher
                terminez en enregistrant l’image

                Vous pouvez répéter cette opération 25 fois uniquement, pour pouvoir en faire plus il faudra acheter un des abonnements proposés : 
                un plan basique à 8 $/mois 
                un plan standart à 24 $/mois (permet de générer sans limitations)
                un plan pro à 48 $/mois (permet de générer sans limitations)

                Les 3 abonnements vous permettront de créer des images directement dans vos messages privés et non plus sur le channel discord accessible aux milliers d’utilisateurs.

                Retrouvez tout le mode d’emploi sur le site de Midjourney.
            </p>
        </div>
    </div>

        <div>
            <h2 class="text-violet mt-8 text-center">Articles qui pourraient vous intéresser</h2>
            <hr class="text-violet pb-8 text-center">
        </div>
        
    </main>
</template>