<script setup lang="ts">
import { ref } from 'vue';
const menuIsOpen = ref(false)

import Usericon from './icons/Usericon.vue';
import IAmateurlogo from './icons/IAmateurlogo.vue';
import menu_FlameIcon from './icons/MenuFlameicon.vue';
import menu_LikeIcon from './icons/MenuLikeIcon.vue';
import menu_SaveIcon from './icons/MenuSaveIcon.vue';
import menu_ToolIcon from './icons/MenuToolIcon.vue';
import menu_UserIcon from './icons/MenuUserIcon.vue';
import Tiktok from '../components/icons/Tiktok.vue';
import Instagram from '../components/icons/Instagram.vue';
import Facebook from '../components/icons/Facebook.vue';
import Twitter from '../components/icons/Twitter.vue'

import {RouterLink} from 'vue-router'

function menuIsClosed() {
	  menuIsOpen.value = false
	}
</script>

<template >
    <header class="px-4 bg-noirbackground text-violet h-20 relative z-10 w-full">
        <div class="flex justify-between items-center px-2 lg:grid lg:grid-cols-2 ">
            <RouterLink class="" to="/"><IAmateurlogo/></RouterLink>

            <div class="flex  items-center gap-4 lg:hidden ">
                <RouterLink to="/Connexion"><Usericon/></RouterLink>

                <button class="relative z-10 h-4 w-6 flex flex-col justify-between lg:hidden"
                @pointerdown="menuIsOpen = !menuIsOpen" >
                    <span class="block h-[2px] w-full bg-violet transition duration-300" :class="{'translate-y-[7px] rotate-45':menuIsOpen}"></span>
                    <span class="block h-[2px] w-full bg-violet transition duration-300" :class="{'translate-y-[0px] -rotate-45':menuIsOpen}"></span>
                    <span class="block h-[2px] w-full bg-violet transition duration-300" :class="{'translate-y-[-7px] -rotate-45':menuIsOpen}"></span>
                </button>
            </div>

            <div class="hidden h-[0] w-[0]  lg:visible lg:h-[20px]  lg:flex lg:flex-row lg:w-full lg:justify-end items-center ">
                <RouterLink to="/Connexion">
                    <button class="flex-1 m-2 p-2 bg-white rounded-lg text-noirbackground font-bold " >Connexion</button>
                </RouterLink>

                <RouterLink to="/Inscription">
                        <button class="flex-1 m-2 p-2 bg-violet text-noirbackground font-bold rounded-lg">S'inscrire</button>
                    </RouterLink>

            </div>
        </div>
        <nav class="invisible opacity-0  lg:hidden lg:relative fixed inset-0 h-screen w-screen bg-noirbackground"  :class="{'!visible !opacity-100':menuIsOpen}" 	v-scroll-lock="menuIsOpen">
            <ul class="mt-[80px] ml-[30px] flex flex-col gap-4 ">
                <li class="flex flex-row gap-4 ml-1"><menu_UserIcon/><RouterLink class="active" to="/Espacepersonnel" @click="menuIsClosed">Espace personnel</RouterLink></li>
                <li class="flex flex-row gap-4"><menu_LikeIcon/><RouterLink class="menu-link" to="/Mesfavoris" @click="menuIsClosed">Mes favoris</RouterLink></li>
                <li class="flex flex-row gap-4"><menu_SaveIcon/><RouterLink class="menu-link" to="/Mesenregistrements" @click="menuIsClosed">Mes articles enregistrés</RouterLink></li>
                <li class="flex flex-row gap-4"><menu_ToolIcon/><RouterLink class="menu-link" to="/aPropos" @click="menuIsClosed">À propos</RouterLink></li>
            </ul>

            <span class="mt-5 mb-2 ml-[2rem] block h-[2px] w-[300px] bg-violet"></span>
            <ul class=" mt-[50px] ml-[30px] mb-5 space-x-10 flex flex-col gap-4 lg:flex-row">
                <li class="flex flex-row gap-4"><menu_FlameIcon/><a class="menu-link" >IA tendances</a></li>
                <li><a class="menu-link" href="">Articles récents</a></li>
                <li><a class="menu-link" href="">Tous les articles</a></li>
            </ul>

            <div class=" mt-8 ml-10 flex-col align-center items-center lg:flex mr-10">
            <h4 class="text-violet text-sm mb-2 flex flex-row-reverse">Suivez-nous</h4>
            <ul class="flex items-center flex-row-reverse gap-2">
                <li ><Tiktok class="h-7 w-fit" /></li>
                <li><Instagram class="h-7 w-fit" /></li>
                <li><Facebook class="h-7 w-fit"/></li>
                <li><Twitter class="h-7 w-fit"/></li>
            </ul>
            </div>
        </nav>

    </header>
</template>
