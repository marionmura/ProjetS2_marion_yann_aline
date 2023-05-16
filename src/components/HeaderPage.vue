<script setup lang="ts">
import { ref } from 'vue';
const menuIsOpen = ref(false)

import Usericon from './icons/Usericon.vue';
import IAmateurlogo from './icons/IAmateurlogo.vue';
import {RouterLink} from 'vue-router'
</script>

<template > 
    <header class=" bg-noirbackground text-violet h-20 ">
        <RouterLink to="index"><IAmateurlogo/></RouterLink>
        <RouterLink to="/Connexion"><Usericon/></RouterLink>
        
        <button class="h-4 w-6 flex flex-col justify-between lg:hidden"  
        @pointerdown="menuIsOpen = !menuIsOpen" >
            <span class="block h-[2px] w-full bg-violet transition duration-300" :class="{'translate-y-[8px] translate-x-[2px] rotate-45':menuIsOpen}"></span>
            <span class="block h-[2px] w-full bg-violet transition duration-300" :class="{'translate-y-[0px] -rotate-45':menuIsOpen}"></span>
            <span class="block h-[2px] w-full bg-violet transition duration-300" :class="{'translate-y-[-7px] -rotate-45':menuIsOpen}"></span>
        </button>
        <nav class="invisible opacity-0  lg:invisible"  :class="{'!visible !opacity-100':menuIsOpen}">
            <ul class="mt-5 space-x-10 flex flex-col gap-4 ">
                <li><RouterLink class="active" to="/Espacepersonnel" >Espace personnel</RouterLink></li>
                <li><RouterLink class="" to="/Mesfavoris">Mes favoris</RouterLink></li>
                <li><RouterLink class="" to="/Mesarticlesenregistres">Mes articles enregistrés</RouterLink></li>
                <li><RouterLink class="" to="/">Paramètres</RouterLink></li>
            </ul>

            <span class="mt-5 mb-2 block h-[2px] w-[300px] bg-violet"></span>
            <ul class=" mt-5 mb-5 space-x-10 flex flex-col gap-4 lg:flex-row">
                <li><a class="" >IA tendances</a></li>
                <li><a class="" href="">Articles récents</a></li>
                <li><a class="" href="">Tous les articles</a></li>
            </ul>
                
        </nav>
        <div class="invisible h-[0] w-[0] lg:visible lg:h-[20px] lg:w-[10px] flex items-center">
                <button class="flex-1 m-2 p-2 bg-white rounded-lg text-noirbackground font-bold ">Connexion</button>
                <button class="flex-1 m-2 p-2 bg-violet text-noirbackground font-bold rounded-lg">S'inscrire</button>
            </div>
    </header>
</template>