<script setup lang="ts">
import Tiktok from './icons/Tiktok.vue';
import Instagram from './icons/Instagram.vue';
import Facebook from './icons/Facebook.vue';
import Twitter from './icons/Twitter.vue';

import {RouterLink} from 'vue-router'
</script>

<template>

    <footer class="pl-10 pt-10 flex flex-col bg-grisfooter">

        <nav class=" flex flex-col gap-2 lg:grid lg:grid-cols-4 md:grid-cols-2 md:grid">

            <div class="space-y-4 mb-5">
                <h4 >Abonnement</h4>
                <ul class="ml-4">
                    <li class="text-white"><a href="#">Voir l'offre</a></li>
                    <li class="text-white"><RouterLink to="/Abonnement">Souscrire</RouterLink></li>
                </ul>
                <span class="block h-[1px] w-[250px] bg-white lg:invisible lg:h-[0px] lg:w-[0px]"></span>
            </div>

            <div class="space-y-4 mb-5">
                <h4>Articles</h4>
                <ul class="ml-4">
                    <li class="text-white"><RouterLink to="/">Voir les articles récents</RouterLink></li>
                    <li class="text-white"><a href="#">Voir les articles tendances</a></li>
                </ul>

                <span class="block h-[1px] w-[250px] bg-white lg:invisible lg:h-[0px] lg:w-[0px]"></span>
            </div>

            <div class="space-y-4 mb-5">
                <h4>Contact</h4>
                <ul class="ml-4"> 
                    <li class="text-white"><a href="#">Contactez-nous</a></li>
                    <li class="text-white"><RouterLink to="/aPropos">Qui sommes-nous ?</RouterLink></li>
                </ul>

                <span class="block h-[1px] w-[250px] bg-white lg:hidden md:hidden lg:h-[0px] lg:w-[0px]"></span>
            </div>


            <div class="space-y-4 mb-6">
                <h4>Mentions Légales</h4>
                <ul class="ml-4">
                    <li class="text-white"><RouterLink to="/PolitiqueCookies">Politique des cookies</RouterLink></li>
                    <li class="text-white"><RouterLink to="/PolitiqueConfidentialite">Politique de confidentialité</RouterLink></li>
                </ul>
            </div>

        </nav>

        <div class="space-y-4 mb-10">

            <h4 class="font-bold text-violet">Suivez-nous</h4>

            <ul class="flex flex-row gap-4">
                <li><Tiktok /></li>
                <li><Instagram /></li>
                <li><Facebook/></li>
                <li><Twitter/></li>
            </ul>

        </div>

    </footer>

    </template>
