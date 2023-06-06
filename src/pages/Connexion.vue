<script setup lang="ts">
import { onMounted, ref } from 'vue';
import pocketbase from 'pocketbase';

let pb: any = null;

const currentUser = ref()

const email = ref("");
const password = ref("");
const username = ref("");
const loginMode = ref(true);

onMounted(async () => {
  pb = new pocketbase('http://127.0.0.1:8090');

  pb.authStore.onChange(()=>{
    currentUser.value = pb.authStore.model
  }, true)
})

const doSeDeconnecter = () => {
  pb.authStore.clear();
}

const doSeConnecter = async () => {
  try {
    const authData = await pb.collection('users').authWithPassword(email.value, password.value);
  } catch (error) {
    alert("Quelque chose s'est mal passé, veuillez réessayer")
  }
}

const doCreerCompte = async () => {
  try {
    const data = {
      "username": username.value,
      "email": email.value,
      "emailVisibility": true,
      "password": password.value,
      "passwordConfirm": password.value
    };

    const record = await pb.collection('users').create(data);

    await doSeConnecter();

  } catch (error) {
    alert("Quelque chose s'est mal passé, veuillez réessayer")
  }
}
</script> 


<template>
  <main class="bg-grisbg text-white">

    <div v-if="currentUser">
      <div class="space-y-2 bg-noirbackground lg:bg-transparent lg:mb-10">
        <h1 class="text-violet pt-10 text-center lg:text-white lg:font-cabin lg:text-left lg:px-12 font-medium text-2xl">Bienvenue {{ currentUser?.username }}</h1>
        <hr class="text-violet lg:relative lg:border-t-2 lg:hidden">
      </div>

      <div class="flex justify-center">
        <button @click="doSeDeconnecter" class="p-1 pl-3 pr-3  m-1 text-noirbackground font-bold rounded-full bg-white">Se déconnecter</button>
      </div>
    </div>

    <div v-else>
      <div class="space-y-2 bg-noirbackground lg:bg-transparent lg:mb-10">
        <h1 class="text-violet pt-10 text-center lg:text-white lg:font-cabin lg:text-left lg:px-12 font-medium text-2xl">{{ loginMode ? "Se connecter" : "S'inscrire" }}</h1>
        <hr class="text-violet lg:relative lg:border-t-2 lg:hidden">
      </div>
    
      <form>

        <div v-if="loginMode">
          <div class="mt-5 flex flex-col mr-[2rem] ml-[2rem] text-white">

            <label for="email" class="text-violet mb-1" width="50px">Email (*)</label>
            <input v-model="email" type="email" name="email" placeholder="Entrez votre adresse mail" required  class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
          
            <label for="password" class="text-violet mb-1" width="50px">Mot de passe (*) </label>
            <input v-model="password" type="password" name="password" placeholder="Entrez votre mot de passe (8 caractères minimum)" required class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0" >
          </div>

          <div class="flex font-bold text-lg p-3 justify-center mb-8">
            <button @click="doSeConnecter" class="bg-white text-grisbg rounded-full py-2 px-14 lg:cursor-pointer">Connexion</button>
          </div>
          <button @click="loginMode = false" class="p-1 pl-3 pr-3 m-1 mb-10 mx-6 font-bold rounded-lg text-white border border-1 border-violet">Pas encore de compte ? Inscrivez-vous GRATUITEMENT dès maintenant</button>  
        </div>

        <div v-else>
          <div class="mt-5 flex flex-col mr-[2rem] ml-[2rem] text-white">

            <label for="email" class="text-violet mb-1" width="50px">Email (*)</label>
            <input v-model="email" type="email" name="email" placeholder="Entrez votre adresse mail" required  class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">

            <label for="username" class="text-violet" width="50px">Nom d'utilisateur (*)</label>
            <input v-model="username" type="text" name="username" placeholder="Entrez votre nom d'utilisateur (sans espace)" required  class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">

            <label for="password" class="text-violet mb-1" width="50px">Mot de passe (*) </label>
            <input v-model="password" type="password" name="password" placeholder="Entrez votre mot de passe (8 caractères minimum)" required class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0" >
          </div>

          <div class="flex font-bold text-lg p-3 justify-center mb-8">
            <button @click="doCreerCompte" class="bg-white text-grisbg rounded-full py-2 px-8 lg:cursor-pointer">Enregistrer nouvel utilisateur</button>
          </div>
          <button @click="loginMode = true" class="p-3 pl-3 pr-3 m-1 mb-10 mx-24 font-bold rounded-lg text-white border border-1 border-violet">J'ai déjà un compte</button>
        </div>
      
      </form>
    </div>

    <p class="text-sm p-1 lg:p-5">Les champs avec (*) sont obligatoires</p>
  </main>
</template>

