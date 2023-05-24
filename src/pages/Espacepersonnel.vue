<script setup lang="ts">
import AvatarMarion from '@/components/icons/AvatarMarion.vue';
import Toolicon from '@/components/icons/Toolicon.vue';
import Binicon from '@/components/icons/Binicon.vue';
import Googleicon from '@/components/icons/Googleicon.vue';
import Saveicon from '@/components/icons/Saveicon.vue';
</script>

<template>
    <main class="bg-grisbg text-white ">
        <div class="bg-noirbackground text-violet flex flex-row items-center justify-center gap-2 pl-5">
            <Toolicon/>
            <p class="font-bold text-center">À propos de vous</p>
        </div>
        
        <span class="block h-[1px] w-full bg-violet"></span>

        <div class="grid grid-cols-2 gap-[0px] px-[2rem] my-5 items-center">
            <AvatarMarion/>
            <div class="flex flex-col">
                <p class="font-bold"> Nom Prénom Utilisateur</p>
                <p class="text-violet">associer un compte Google</p>
            </div>
        </div>

        <div class="mx-[2rem] my-5">
            <div class="flex flex-row items-center gap-2">
                <Toolicon class="h-[20px] w-auto"/>
                <p class="text-violet">Modifier mes informations</p>
            </div>
            <div class="flex flex-row items-center gap-2">
                <Binicon/>
                <p class="text-rouge">supprimer mon compte</p>
            </div>
        </div>

        <div class="mx-[2rem] my-5 text-violet ">
            <h3>Préférence de langue</h3>
            <p >français</p>

            <div class="flex flex-row items-center gap-2">
                <Toolicon class="h-[20px] w-auto"/>
                <p>modifier</p>
            </div>
            
        </div>

        <div class="text-violet mx-[2rem] my-5">
            <h3>Abonnement</h3>
            <p>gratuit</p>
        </div>

        <div class="flex justify-end items-center pb-5">
            <RouterLink to="/Abonnement"><button class="rounded-full bg-violet text-noirbackground font-bold p-1 px-2">premium</button>
            </RouterLink>
            <RouterLink to="/Connexion"><button class="p-1  m-1 pl-3 pr-3 rounded-full bg-grisfooter text-white">déconnexion</button></RouterLink>
        </div>

        <div class="text-violet flex flex-row items-center justify-center gap-2 pl-5">
            <Saveicon class="fill-violet"/>
            <p class="font-bold text-center">À propos de vous</p>
        </div>
        
        <span class="block h-[1px] w-full bg-violet"></span>

        <img class=" w-[345px]" src="../img/previewfavarticle.webp" alt="preview articles favoris"/>
        
        <img class=" w-[345px]" src="../img/previewarticlesave.webp" alt="preview articles enregistrés"/>

    </main>

    
</template>