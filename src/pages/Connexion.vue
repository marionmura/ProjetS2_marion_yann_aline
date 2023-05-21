 <script setup lang="ts">
//   import pocketbase from 'pocketbase';
//   const pb = new pocketbase('http://127.0.0.1:8090');

//   const authData = await pb.collection('users').authWithPassword(
//     'EMAIL',
//     'PASSWORD',
// )
 
</script> 


<template>
  <main class="pt-20 bg-grisbg text-white">
    <h1 class="ml-[2rem] mr-[2rem] p-4 text-center text-violet border-2 rounded-lg">Connexion</h1>
    
    <form>
      <div class="mt-5  pb-10 flex flex-col mr-[2rem] ml-[2rem] text-white">
        <label class="text-violet" width="50px">Email (*)</label>
        <p></p>
        <input type="email" id="login" placeholder="écrire ici" required  class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
        <p class="mb-5"></p>
  
      <label class="text-violet" width="50px">Mot de passe (*) </label><p></p>
      <input  type="password" id="passwd" placeholder="écrire ici" required class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0" >
      <p></p>
      
      <!-- <p class="text-violet border-b-2 w-[200px]" v-on:click="reset()">J'ai oublié mon mot de passe</p> -->
    </div>
    </form>
    

      <div class="flex flex-row justify-end mt-5 pb-[10px]">
        <!-- <RouterLink to="/Inscription"><button class="p-1  m-1 pl-3 pr-3 rounded-full bg-grisfooter text-white" v-on:click="register()">s'inscrire</button> -->
        <!-- </RouterLink> -->

        <RouterLink to="/Espacepersonnel">
          <!-- <button class="p-1 pl-3 pr-3  m-1 text-noirbackground font-bold rounded-full bg-white" v-on:click="login()">connexion</button> -->
        </RouterLink>
                
      </div>

    </main>
</template>

