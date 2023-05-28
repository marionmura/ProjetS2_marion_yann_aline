<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import FooterPage from './components/FooterPage.vue';
import HeaderPage from './components/HeaderPage.vue';
</script>

<template>

    <header>
        <HeaderPage />
        <RouterLink to="/"><p class="">Test</p></RouterLink>
    </header>

    <main>
        <!-- Suspense sera utile pour charger les données (await) -->
        <Suspense>
            <!-- Affiche la page -->
            <RouterView />
        </Suspense>
    </main>

    <footer>
        <FooterPage />
    </footer>

</template>
