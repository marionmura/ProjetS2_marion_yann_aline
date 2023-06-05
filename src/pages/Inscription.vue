<script setup lang="ts">
import { onMounted, ref } from 'vue';
import pocketbase from 'pocketbase';

let pb: any = null;

const currentUser = ref()

const email = ref("");
const password = ref("");
const username = ref("");

onMounted(async () => {
  pb = new pocketbase('http://127.0.0.1:8090');

  pb.authStore.onChange(()=>{
    currentUser.value = pb.authStore.model
  }, true)
})

const doSeConnecter = async () => {
  try {
    const authData = await pb.collection('users').authWithPassword(email.value, password.value);

    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);
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
  <div class="bg-grisbg text-white">

    <h1 class="ml-[2rem] mr-[2rem] p-4 text-center text-violet border-2 rounded-lg">S'inscrire</h1>
      
    <form>

        <div class="mt-5 flex flex-col mr-[2rem] ml-[2rem] text-white">
          
            <label for="username" class="text-violet" width="50px">Nom d'utilisateur (*)</label>
            <input v-model="username" type="text" name="username" placeholder="Entrez votre nom d'utilisateur (sans espace)" required  class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
        
            <label for="email" class="text-violet mb-1" width="50px">Email (*)</label>
            <input v-model="email" type="email" name="email" placeholder="Entrez votre adresse mail" required  class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
  
            <label for="password" class="text-violet mb-1" width="50px">Mot de passe (*) </label><p></p>
            <input v-model="password" type="password" name="password" placeholder="Entrez votre mot de passe (8 caractères minimum)" required class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0" >
      
        </div>
      
        <div class="flex flex-row justify-end mt-5 pb-[10px]">
          <button @click="doCreerCompte" class="p-1 pl-3 pr-3 m-1 font-bold rounded-full text-noirbackground bg-white">Enregistrer nouvel utilisateur</button>
          <RouterLink class="p-1 pl-3 pr-3 m-1 font-bold rounded-full text-white bg-rouge" to="/Connexion">J'ai déjà un compte</RouterLink>  
          <RouterLink class="p-1 pl-3 pr-3 m-1 font-bold rounded-full text-white bg-rouge" to="/DemandeChangementMDP">J'ai oublié mon mot de passe</RouterLink>  

        </div>
    </form>

</div>
</template>





<!-- <script setup lang="ts">
import Googleicon from '../components/icons/Googleicon.vue'
</script>

<template>
    <main class="bg-grisbg text-white">
    <h1 class="ml-[2rem] mr-[2rem] p-4 text-center text-violet border-2 rounded-lg">Inscription</h1>
    
    <div class="my-8 ml-[2rem] mr-[2rem] flex flex-row gap-2 p-4 bg-white rounded-lg justify-center items-center">
        <Googleicon/>
        <p class="text-noirbackground">Inscription avec un compte Google</p>
    </div>

    <form>
        <div class="grid grid-cols-2 md:grid-cols-2 "> 
            <div class="mx-[2rem] ">
                <label class="text-violet" width="50px">Nom (*)</label>
                
                <input type="text" id="name" placeholder="écrire ici" required class="bg-grisbg border-2 rounded-md text-violet w-full p-2 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
            </div>
            

            <div class=" mx-[2rem]">
                <form>
                    <label class="text-violet" width="50px">Prénom (*)</label>
                    <input type="name" id="forname" placeholder="écrire ici" class="bg-grisbg border-2 rounded-md text-violet p-2 w-full focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
                </form>
                
            </div>
        
        </div>

        <div class="mt-5  pb-10 flex flex-col mr-[2rem] ml-[2rem] text-white">
            <label class="text-violet" width="50px">Email (*)</label>
            <input type="email" id="login" placeholder="écrire ici" class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
            <p class="mb-5"></p>
        <label class="text-violet" width="50px">Créer un mot de passe (*) </label>
        <input  type="password" id="passwd" placeholder="écrire ici" class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0" >

        <label class="text-violet" width="50px">Confirmation mot de passe (*) </label>
        <input  type="password" id="passwdconfirm" placeholder="écrire ici" class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0" >
        </div>

    </form>
    
      <div class="flex flex-row justify-end pb-[15px] mr-[2rem]">
        <div class="flex flex-col pr-5 items-center">
            <p class="">J'ai déjà un compte</p>
            <RouterLink to="/Connexion">
                <p class="text-violet">je me connecte</p>
            </RouterLink>
        </div>

        <RouterLink to="/Espacepersonnel"><button class="p-1 pl-3 pr-3  m-1 text-noirbackground font-bold rounded-full bg-white" v-on:click="">inscription</button></RouterLink>
      </div>

    </main>
</template> -->