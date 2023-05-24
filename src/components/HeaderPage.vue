<script setup lang="ts">
import { ref } from 'vue';
const menuIsOpen = ref(false)

import Usericon from './icons/Usericon.vue';
import IAmateurlogo from './icons/IAmateurlogo.vue';
import {RouterLink} from 'vue-router'
</script>

<template > 
    <header class="p-4 bg-noirbackground text-violet h-20 relative fixed z-10 w-full mb-5">
        <div class="flex justify-between items-center px-2 ">
            <RouterLink class="" to="/index"><IAmateurlogo/></RouterLink>
            
            <div class="flex items-center gap-4 lg:hidden">
                <RouterLink to="/Connexion"><Usericon/></RouterLink>
        
                <button class="relative z-10 h-4 w-6 flex flex-col justify-between lg:hidden"  
                @pointerdown="menuIsOpen = !menuIsOpen" >
                    <span class="block h-[2px] w-full bg-violet transition duration-300" :class="{'translate-y-[8px] translate-x-[2px] rotate-45':menuIsOpen}"></span>
                    <span class="block h-[2px] w-full bg-violet transition duration-300" :class="{'translate-y-[0px] -rotate-45':menuIsOpen}"></span>
                    <span class="block h-[2px] w-full bg-violet transition duration-300" :class="{'translate-y-[-7px] -rotate-45':menuIsOpen}"></span>
                </button>
            </div>

        </div>
        <nav class="invisible opacity-0  lg:invisible fixed inset-0 h-screen w-screen bg-noirbackground"  :class="{'!visible !opacity-100':menuIsOpen}">
            <ul class="mt-[80px] ml-[30px] space-x-10 flex flex-col gap-4 ">
                <li><RouterLink class="active" to="/Espacepersonnel" >Espace personnel</RouterLink></li>
                <li><RouterLink class="menu-link" to="/Mesfavoris">Mes favoris</RouterLink></li>
                <li><RouterLink class="menu-link" to="/Mesarticlesenregistres">Mes articles enregistrés</RouterLink></li>
                <li><RouterLink class="menu-link" to="/aPropos">À propos</RouterLink></li>
            </ul>

            <span class="mt-5 mb-2 ml-[2rem] block h-[2px] w-[300px] bg-violet"></span>
            <ul class=" mt-[50px] ml-[30px] mb-5 space-x-10 flex flex-col gap-4 lg:flex-row">
                <li><a class="menu-link" >IA tendances</a></li>
                <li><a class="menu-link" href="">Articles récents</a></li>
                <li><a class="mennu-link" href="">Tous les articles</a></li>
            </ul>
                
        </nav>
        <div class="invisible h-[0] w-[0] lg:visible lg:h-[20px] lg:w-[10px] flex items-center">
            <RouterLink to="/Connexion">
                <button class="flex-1 m-2 p-2 bg-white rounded-lg text-noirbackground font-bold ">Connexion</button> 
            </RouterLink>
                
            <RouterLink to="/Inscription">
                    <button class="flex-1 m-2 p-2 bg-violet text-noirbackground font-bold rounded-lg">S'inscrire</button>
                </RouterLink>
                
            </div>
    </header>
</template>