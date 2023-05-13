<script setup lang="ts">
import { ref } from 'vue';
const menuIsOpen = ref(false)

</script>

<template >
    <header class=" border-b-4 border-b-noir">
        <a href="/">
        </a>
        <button class=""  
        @pointerdown="menuIsOpen = !menuIsOpen" >
            <span class="block h-[2px] w-full bg-black transition duration-300" :class="{'translate-y-[10px] rotate-45':menuIsOpen}"></span>
            <span class="block h-[2px] w-full bg-black transition duration-300" :class="{'translate-y-[0px] -rotate-45':menuIsOpen}"></span>
        </button>
        <nav class=""  :class="{'!visible !opacity-100':menuIsOpen}">
            <ul class="flex flex-col gap-4 lg:flex-row">
                <li><a class="active" >Espace personnel</a></li>
                <li><a class="" href="">Mes favoris</a></li>
                <li><a class="" href="">Mes articles enregistrés</a></li>
                <li><a class="" href="">Paramètres</a></li>
            </ul>
            <ul class="flex flex-col gap-4 lg:flex-row">
                <li><a class="active" >IA tendances</a></li>
                <li><a class="" href="">Articles récents</a></li>
                <li><a class="" href="">Tous les articles</a></li>
            </ul>
            <div class="">
            <button class="">Connexion</button>
            <button class=" ">S'inscrire</button>
        </div>
        </nav>
    </header>
</template>