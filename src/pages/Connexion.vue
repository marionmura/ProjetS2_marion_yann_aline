<script setup lang="ts">
import { onMounted, ref } from 'vue';
import pocketbase from 'pocketbase';

let pb = null;
const currentUser = ref();
const username = ref("");
const password = ref("");

onMounted(async () => {
  pb = new pocketbase('http://127.0.0.1:8090');

  pb.authStore.onChange(()=>{
    currentUser.value = pb.authStore.model
  }, true)
})

const doSedeconnecter = () => {
  pb.authStore.clear();
}

const doSeconnecter = async () => {
  const authData = await pb.collection('users').authWithPassword(username.value, password.value);

  // after the above you can also access the auth data from the authStore
  console.log(pb.authStore.isValid);
  console.log(pb.authStore.token);
  console.log(pb.authStore.model);
}
</script> 


<template>
  <main class="bg-grisbg text-white">

    <div v-if="currentUser">
      <h1 class="ml-[2rem] mr-[2rem] p-4 text-center text-violet border-2 rounded-lg">Bienvenue {{ currentUser?.name }}</h1>
      <div class="flex justify-center">
        <button @click="doSedeconnecter" class="p-1 pl-3 pr-3  m-1 text-noirbackground font-bold rounded-full bg-white">Se déconnecter</button>
      </div>
    </div>

    <div v-else>
      <h1 class="ml-[2rem] mr-[2rem] p-4 text-center text-violet border-2 rounded-lg">Connexion</h1>
      <form>
        <div class="mt-5  pb-10 flex flex-col mr-[2rem] ml-[2rem] text-white">
          
          <label for="email" class="text-violet" width="50px">Email (*)</label>
          <input v-model="username" type="email" name="email" id="login" placeholder="écrire ici" required  class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
  
          <label for="password" class="text-violet" width="50px">Mot de passe (*) </label><p></p>
          <input v-model="password" type="password" name="password" id="passwd" placeholder="écrire ici" required class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0" >
      
          <!-- <p class="text-violet border-b-2 w-[200px]" v-on:click="reset()">J'ai oublié mon mot de passe</p> -->
        </div>
      </form>
    </div>
    

      <div class="flex flex-row justify-end mt-5 pb-[10px]">
        <RouterLink to="/Inscription"><button class="p-1  m-1 pl-3 pr-3 rounded-full bg-grisfooter text-white" v-on:click="">s'inscrire</button>
        </RouterLink>

        <!-- <RouterLink to="/Espacepersonnel"> -->
          <button @click="doSeconnecter" class="p-1 pl-3 pr-3  m-1 text-noirbackground font-bold rounded-full bg-white">connexion</button>
        <!-- </RouterLink> -->
                
      </div>

    </main>
</template>

