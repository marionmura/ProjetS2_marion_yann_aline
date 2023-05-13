<script setup lang="ts">
import Tiktok from './icons/Tiktok.vue';
import Instagram from './icons/Instagram.vue';
import Facebook from './icons/Facebook.vue';
import Twitter from './icons/Twitter.vue';
</script>

<template>

    <footer class="flex flex-col bg-grisfooter">

        <nav>

            <div class="space-y-4">
                <h4 >Abonnement</h4>
                <ul>
                    <li><a href="#">Voir l'offre</a></li>
                    <li><a href="#">Souscrire</a></li>
                </ul>
            </div>

            <span></span>

            <div>
                <h4>Articles</h4>
                <ul>
                    <li><a href="#">Voir les articles récents</a></li>
                    <li><a href="#">Voir les articles tendances</a></li>
                </ul>
            </div>

            <span></span>

            <div>
                <h4>Contact</h4>
                <ul>
                    <li><a href="#">Contactez-nous</a></li>
                    <li><a href="#">Qui sommes-nous ?</a></li>
                </ul>
            </div>

            <span></span>

            <div>
                <h4>Mentions Légales</h4>
                <ul>
                    <li><a href="#">Politique des cookies</a></li>
                    <li><a href="#">Politique de confidentialité</a></li>
                </ul>
            </div>

        </nav>

        <div>

            <p>Suivez-nous</p>

            <ul>
                <li><Tiktok /></li>
                <li><Instagram /></li>
                <li><Facebook/></li>
                <li><Twitter/></li>
            </ul>

        </div>

    </footer>

    </template>
