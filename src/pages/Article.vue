<script setup lang="ts">
import Like from '../components/icons/Like.vue';
import Save from '../components/icons/Save.vue';
import Ampouleicon from '../components/icons/Ampouleicon.vue';
</script>

<template>
    <body class=" bg-noirbackground text-white max-w-full">
       
        <h1 class="bg-grisbg">Connexion</h1>
        <div class="flex flex-col">
            <RouterLink to="/Home">Home</RouterLink>
            <RouterLink to="/aPropos">A Propos</RouterLink>
        </div>

    <div class="px-20 pb-20 bg-grisfooter rounded-3xl ;">
    
            <img class="w-full translate-y-[-50%]" src="../img/robot_2.webp" alt="Image principale de l'article">
        
        <div >
                <div class="flex flex-wrap">
                    <h1 class="w-3/4">Midjourney</h1>
                        <a class="mx-[0.2rem] my-2" href="/"><Like /></a>
                        <a class="mx-[0.2rem] my-2" href="/"><Save /></a>
                    </div>  
                <p> Conçu par Open AI  </p>      
        </div>

            <h3>Fonctionnalités : </h3>
                <li>IA générative</li>
                <li> IA artistique</li>
                <li> utilisation via discord</li>
                
            <h2>Pourquoi utiliser Midjourney ?</h2>
            <p>
                Vous avez des difficultés en dessin ou juste pour représenter vos idées ? Alors la solution est simple ! Midjourney vous aidera, à partir d’une simple description de ce que vous souhaitez l’IA peut générer 4 images de styles différents et vous avez juste choisir votre préférée pour l’améliorer. 
            </p>

            <h2>Version Midjourney premium disponible</h2>
            <p>
                fonctionnalités bonus :
                permet de générer de façon illimitée
                l’offre gratuite est limitée à 25 lots d’images        
            </p>

                <icon><Ampouleicon /></icon>
                <h2>Comment utiliser Midjourney - tuto aide</h2>
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
        <div>
            <h2>Articles qui pourraient vous intéresser</h2>
            
        </div>
    </body>
</template>