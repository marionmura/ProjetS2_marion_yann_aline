<script setup lang="ts">
import { onMounted, ref } from 'vue';
import pocketbase from 'pocketbase';
import { useRouter } from 'vue-router';

let pb: any = null;

const currentUser = ref()
const router = useRouter()

const email = ref("");

onMounted(async () => {
  // pb = new pocketbase('http://127.0.0.1:8090');
  pb = new pocketbase('http://projets2.marionmura.fr:9002');
  pb.authStore.onChange(()=>{
    currentUser.value = pb.authStore.model
  }, true)
})

const doDemande = async () => {
  if (email.value === "") alert("Email requis")
  try {
    await pb.collection('users').requestPasswordReset(email.value);
    alert("Demande de réinitialisation de mot de passe envoyée")
    pb.authStore.isValid && router.replace("/UserPage");
  } catch (error) {
  }
}

</script> 


<template>
  <div class="bg-grisbg text-white">

    <h1 class="ml-[2rem] mr-[2rem] p-4 text-center text-violet border-2 rounded-lg">Changer mon mot de passe</h1>
      
    <form>

        <div class="mt-5 flex flex-col mr-[2rem] ml-[2rem] text-white">
        
            <label for="email" class="text-violet mb-1" width="50px">Email (*)</label>
            <input v-model="email" type="email" name="email" placeholder="Entrez votre adresse mail" required  class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
      
        </div>
      
        <div class="flex flex-row justify-end mt-5 pb-[10px]">
          <button @click="doDemande" class="p-1 pl-3 pr-3 m-1 font-bold rounded-full text-noirbackground bg-white">Envoyer email de vérification</button>
          <RouterLink class="p-1 pl-3 pr-3 m-1 font-bold rounded-full text-white bg-rouge" to="/Connexion">Annuler</RouterLink>  
        </div>
    </form>

</div>
</template>