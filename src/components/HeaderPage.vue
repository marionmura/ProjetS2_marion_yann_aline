<script setup lang="ts">
import { ref } from 'vue';
const menuIsOpen = ref(false)

</script>

<template >
    <header class="pt-5 bg-noirbackground text-violet">
        <a href="/">
        </a>
        <button class=" h-4 w-6 flex flex-col justify-between lg:hidden"  
        @pointerdown="menuIsOpen = !menuIsOpen" >
            <span class="block h-[2px] w-full bg-violet transition duration-300" :class="{'translate-y-[8px] translate-x-[2px] rotate-45':menuIsOpen}"></span>
            <span class="block h-[2px] w-full bg-violet transition duration-300" :class="{'translate-y-[0px] -rotate-45':menuIsOpen}"></span>
            <span class="block h-[2px] w-full bg-violet transition duration-300" :class="{'translate-y-[-7px] -rotate-45':menuIsOpen}"></span>
        </button>
        <nav class="invisible opacity-0  lg:invisible"  :class="{'!visible !opacity-100':menuIsOpen}">
            <ul class="mt-5 space-x-10 flex flex-col gap-4 ">
                <li><a class="active" >Espace personnel</a></li>
                <li><a class="" href="">Mes favoris</a></li>
                <li><a class="" href="">Mes articles enregistrés</a></li>
                <li><a class="" href="">Paramètres</a></li>
            </ul>

            <span class="mt-5 mb-2 block h-[2px] w-[300px] bg-violet"></span>
            <ul class=" mt-5 mb-5 space-x-10 flex flex-col gap-4 lg:flex-row">
                <li><a class="" >IA tendances</a></li>
                <li><a class="" href="">Articles récents</a></li>
                <li><a class="" href="">Tous les articles</a></li>
            </ul>
        
        </nav>
        <div class="invisible lg:visible flex items-center">
            <button class="flex-1 m-2 p-2 bg-white rounded-lg text-noirbackground font-bold ">Connexion</button>
            <button class="flex-1 m-2 p-2 bg-violet text-noirbackground font-bold rounded-lg">S'inscrire</button>
        </div>
    </header>
</template>