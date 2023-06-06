*<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
// import { usepocketbase } from '@/backend'
import pocketbase from 'pocketbase';


let pb: any = null;
const currentUser = ref();
const router = useRouter();

onMounted(async () => {
  pb = new pocketbase('http://127.0.0.1:8090');
  !pb.authStore.isValid && router.replace("/Connexion")
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
})

const doSeDeconnecter = () => {
  pb.authStore.clear();
  currentUser.value = null;
  router.replace("/Connexion")
}
</script>

<template>
    <h2>Bienvenue {{ currentUser && currentUser?.username || currentUser?.email }}</h2>

    <div class="flex flex-row justify-end mt-5 pb-[10px]">
        <button @click="doSeDeconnecter" class="p-1 pl-3 pr-3 m-1 font-bold rounded-full text-noirbackground bg-white">Se déconnecter</button>
    </div>

</template>