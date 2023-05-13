<script setup lang="ts">
import { ref } from 'vue';
const menuIsOpen = ref(false)

</script>

<template >
    <header class=" border-b-4 border-b-indigo-300">
        <a href="/">
            <IconLogo/>
        </a>
        <button class=""  
        @pointerdown="menuIsOpen = !menuIsOpen" >
            <span class="block h-[2px] w-full bg-black transition duration-300" :class="{'translate-y-[10px] rotate-45':menuIsOpen}"></span>
            <span class="block h-[2px] w-full bg-black transition duration-300" :class="{'translate-y-[0px] -rotate-45':menuIsOpen}"></span>
        </button>
        <nav class=""  :class="{'!visible !opacity-100':menuIsOpen}">
            <ul class="flex flex-col gap-4 lg:flex-row">
                <li><a class="active" >Rent</a></li>
                <li><a class="" href="">Buy</a></li>
                <li><a class="" href="">Sell</a></li>
                <li><a class="" href="">Manage Property</a></li>
                <li><a class="" href="">Ressources</a></li>
            </ul>
            <div class="">
            <button class="">Login</button>
            <button class=" ">Sign up</button>
        </div>
        </nav>
    </header>
</template>