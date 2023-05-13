<script setup lang="ts">
import Tiktok from './icons/Tiktok.vue';
import Instagram from './icons/Instagram.vue';
import Facebook from './icons/Facebook.vue';
import Twitter from './icons/Twitter.vue';
</script>

<template>

    <footer class="pl-20 pt-20 pb-10 flex flex-col bg-grisfooter">

        <nav class=" flex flex-row gap-10">

            <div class="space-y-4 mb-6">
                <h4 >Abonnement</h4>
                <ul class="ml-4">
                    <li class="text-white"><a href="#">Voir l'offre</a></li>
                    <li class="text-white"><a href="#">Souscrire</a></li>
                </ul>
            </div>

            <span></span>

            <div class="space-y-4 mb-6">
                <h4>Articles</h4>
                <ul class="ml-4">
                    <li class="text-white"><a href="#">Voir les articles récents</a></li>
                    <li class="text-white"><a href="#">Voir les articles tendances</a></li>
                </ul>
            </div>

            <span></span>

            <div class="space-y-4 mb-6">
                <h4>Contact</h4>
                <ul class="ml-4"> 
                    <li class="text-white"><a href="#">Contactez-nous</a></li>
                    <li class="text-white"><a href="#">Qui sommes-nous ?</a></li>
                </ul>
            </div>

            <span></span>

            <div class="space-y-4 mb-6">
                <h4>Mentions Légales</h4>
                <ul class="ml-4">
                    <li class="text-white"><a href="#">Politique des cookies</a></li>
                    <li class="text-white"><a href="#">Politique de confidentialité</a></li>
                </ul>
            </div>

        </nav>

        <div class="space-y-4 mb-6">

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
