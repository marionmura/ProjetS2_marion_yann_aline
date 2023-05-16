<!-- <script>
import pocketbase from 'pocketbase';
const pb = new pocketbase('http://127.0.0.1:8090');

export default {
  methods: {
    //this method allows a new user to sign up the system. Once done, the user receives an email
    //asking for account validation. Once the validation made the user is added to the system
    async login() {
        await pb.collection('users').authWithPassword(document.getElementById("login").value,
        document.getElementById("passwd").value);
    },
    //this method allows the already registred user to log in the system.
    async register() {
      await pb.collection('users').create({
        email: document.getElementById("login").value,
        password: document.getElementById("passwd").value,
        passwordConfirm: document.getElementById("passwd").value,
        name: 'John Di',
      });
    }
    
  }
}

</script> -->

<template  >
  <div class="bg-grisbg text-white">
    <h1 class="ml-4 mr-4 p-4 text-center text-violet border-2 rounded-lg">Connexion</h1>
    <div class="flex flex-col">
        <p>navigation temporaire</p>
        <RouterLink class="bg-violet text-noirbackground font-bold" to="/Home">Home</RouterLink>
        <RouterLink class="bg-violet text-noirbackground font-bold" to="/aPropos">A Propos</RouterLink>
    </div>
    
    <div class="mt-5 text-white">
      <label class="text-violet" width="50px">Email </label><input type="email" id="login" placeholder="écrire ici" class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
      <p></p>
      <label class="text-violet" width="50px">Mot de passe  </label><input  type="password" id="passwd" placeholder="écrire ici" class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0" >
      <p></p>
      
      
      <button class="p-1 m-1 pl-3 pr-3 rounded-full bg-grisfooter text-white" v-on:click="register()">s'inscrire</button>
      <button class="p-1 pl-3 pr-3  m-1 text-noirbackground font-bold rounded-full bg-white" v-on:click="login()">connexion</button>
      <p class="text-violet " v-on:click="reset()">J'ai oublié mon mot de passe</p>
    </div>

    </div>
</template>
