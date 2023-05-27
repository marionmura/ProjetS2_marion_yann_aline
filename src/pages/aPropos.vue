<script setup lang="ts">
import AvatarMarion from '../components/icons/AvatarMarion.vue';
import AvatarYann from '../components/icons/AvatarYann.vue';
import AvatarAline from '../components/icons/AvatarAline.vue';
import Tiktok from '../components/icons/Tiktok.vue';
import Instagram from '../components/icons/Instagram.vue';
import Facebook from '../components/icons/Facebook.vue';
import Twitter from '../components/icons/Twitter.vue'
</script>



<template>
<main class="bg-grisbg ">

  <h1 class="text-center lg:text-white">À Propos du site</h1>

  <div class="flex flex-col mx-5 mt-10 mb-20 p-3 bg-grisfooter border-solid border-2 border-violet rounded lg:flex-row lg:bg-transparent lg:mx-0 lg:p-0 lg:rounded-none lg:border-0 lg:border-t-2 lg:border-b-2">
    <img class="rounded lg:rounded-none" src="../img/departement_MMI_montbeliard.webp" alt="Photographie du département MMI Montbéliard">
    <div class="text-white text-base lg:text-xl lg:p-10">
      <p class="my-3 lg:my-0 lg:mb-6">Ce site web est un projet permettant d’informer et d’aider les gens qui découvrent les IA et qui souhaiteraient les utiliser. Il y a des tutos pour débutants disponibles et il est possible de mettre en favoris vos articles préférés pour les retrouver rapidement.</p>
      <p>Projet réalisé dans le cadre d’un exercice pour le département MMI à Montbéliard.</p>
    </div>
  </div>

  <h1 class="text-center lg:text-white">Et de l'équipe...</h1>

  <div class="flex flex-row align-center justify-center mt-10 mx-5 pb-3 border-solid border-2 border-violet rounded-3xl md:mx-52 lg:mx-80">
    <AvatarMarion />
    <div class="text-white text-sm mx-3 mt-6">
      <p>Marion MURA</p>
      <p>étudiante en 1ère année de MMI</p>
      <a class="underline" href="mailto:marion.mura@edu.univ-fcomte.fr">marion.mura@edu.univ-fcomte.fr</a>
    </div>
  </div>

  <div class="flex flex-row align-center justify-center mt-10 mx-5 pb-3 border-solid border-2 border-violet rounded-3xl md:mx-52 lg:mx-80">
    <AvatarYann />
    <div class="text-white text-sm mx-3 mt-6">
      <p>Yann PERNETTE</p>
      <p>étudiant en 1ère année de MMI</p>
      <a class="underline" href="mailto:yann.pernette@edu.univ-fcomte.fr">yann.pernette@edu.univ-fcomte.fr</a>
    </div>
  </div>

  <div class="flex flex-row align-center justify-center mt-10 mx-5 pb-3 border-solid border-2 border-violet rounded-3xl md:mx-52 lg:mx-80">
    <AvatarAline />
    <div class="text-white text-sm mx-3 mt-6">
      <p>Aline ROSE</p>
      <p>étudiante en 1ère année de MMI</p>
      <a class="underline" href="mailto:aline.rose@edu.univ-fcomte.fr">aline.rose@edu.univ-fcomte.fr</a>
    </div>
  </div>

  <div class="flex flex-col mt-16 pb-20 align-center items-center">
    <h4 class="font-bold text-violet mb-3">Retrouvez IAmateur sur les réseaux</h4>
    <ul class="flex flex-row gap-4">
      <li><Tiktok /></li>
      <li><Instagram /></li>
      <li><Facebook/></li>
      <li><Twitter/></li>
    </ul>
  </div>

</main>
</template>
