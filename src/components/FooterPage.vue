<script setup lang="ts">
import IconFacebook from './icons/IconFacebook.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconLogo from './icons/IconLogo.vue';
</script>

<template>
    <footer class="mx-4 space-y-8 lg:grid lg:grid-cols-4" >
        <IconLogo class="col-span-1"/>
        <nav class="space-y-8 columns-2 gap-4 lg:columns-3 lg:col-span-3">
            <div class="space-y-4">
                <h3 class="uppercase text-sm">Sell a home</h3>
                <ul class="text-sm text-gray-500">
                    <li><a href="">Request an offer</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Reviews</a></li>
                    <li><a href="">Stories</a></li>
                </ul>
            </div>
            
            <div class="space-y-4">
                <h3 class="uppercase text-sm">Buy a home</h3>
                <ul class="text-sm text-gray-500">
                    <li><a href="">Buy</a></li>
                    <li><a href="">Finance</a></li>
                </ul>
            </div>
            
            <div class="space-y-4">
                <h3 class="uppercase text-sm">Buy, Rent and Sell</h3>
                <ul class="text-sm text-gray-500">
                    <li><a href="">Buy and sell properties</a></li>
                    <li><a href="">Rent home</a></li>
                    <li><a href="">Builder trade-up</a></li>
                </ul>
            </div>
            
            <div class="space-y-4">
                <h3 class="uppercase text-sm">Terms & Privacy</h3>
                <ul class="text-sm text-gray-500">
                    <li><a href="">Trust & Safety</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </div>
            
            <div class="space-y-4">
                <h3 class="uppercase text-sm">About</h3>
                <ul class="text-sm text-gray-500">
                    <li><a href="">Company</a></li>
                    <li><a href="">How it works</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Investors</a></li>
                </ul>
            </div>
            
            <div class="space-y-4">
                <h3 class="uppercase text-sm">Resources</h3>
                <ul class="text-sm text-gray-500">
                    <li><a href="">Blog</a></li>
                    <li><a href="">Guides</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Help Center</a></li>
                </ul>
            </div>
        </nav>
        <div class="border-t border-gray-400 px-4 flex flex-col items-center justify-center lg:flex lg:flex-row justify-around lg:col-span-4">
            <p class="pt-4">@2021 Eastery, All rights reserved</p>
            <ul class="flex gap-8 py-8">
                <li><a href="#"><IconFacebook/></a></li>
                <li><a href="#"><IconInstagram/></a></li>
                <li><a href="#"><IconTwitter/></a></li>
                <li><a href="#"><IconLinkedin/></a></li>
            </ul>
        </div>
    </footer>
</template>