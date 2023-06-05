<script setup lang="ts">
import { onMounted, ref } from 'vue';
import pocketbase from 'pocketbase';
import { useRouter } from 'vue-router';

let pb: any = null;

const currentUser = ref()
const router = useRouter()

const email = ref("");
const password = ref("");

onMounted(async () => {
  pb = new pocketbase('http://127.0.0.1:8090');

  pb.authStore.onChange(()=>{
    currentUser.value = pb.authStore.model
  }, true)
})

const doSeConnecter = async () => {
  try {
    const authData = await pb.collection('users').authWithPassword(email.value, password.value);
    pb.authStore.isValid && router.replace("/UserPage");
  } catch (error) {
    alert("Quelque chose s'est mal passé, veuillez réessayer")
  }
}
</script> 


<template>
  <div class="bg-grisbg text-white">

    <h1 class="ml-[2rem] mr-[2rem] p-4 text-center text-violet border-2 rounded-lg">Se connecter</h1>

    <form>

      <div class="mt-5 flex flex-col mr-[2rem] ml-[2rem] text-white">
          
        <label for="email" class="text-violet mb-1" width="50px">Adresse email (*)</label>
        <input v-model="email" type="email" name="email" placeholder="Entrez votre adresse mail" required  class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
  
        <label for="password" class="text-violet mb-1" width="50px">Mot de passe (*) </label><p></p>
        <input v-model="password" type="password" name="password" placeholder="Entrez votre mot de passe (8 caractères minimum)" required class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0" >
      
      </div>
      
      <div class="flex flex-row justify-end mt-5 pb-[10px]">
        <button @click="doSeConnecter" class="p-1 pl-3 pr-3 m-1 font-bold rounded-full text-noirbackground bg-white">Connexion</button>
        <RouterLink class="p-1 pl-3 pr-3 m-1 font-bold rounded-full text-white bg-grisfooter" to="/Inscription">S'inscrire</RouterLink>  
      </div>
    </form>

  </div>
</template>

