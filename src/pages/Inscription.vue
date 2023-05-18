<template>
    <div class="pt-20 bg-grisbg text-white">
    <h1 class="ml-[2rem] mr-[2rem] p-4 text-center text-violet border-2 rounded-lg">Inscription</h1>
    
    <div>
        Inscription avec un compte Google
    </div>

    <div class="flex flex-row"> 
        <form>
        <label class="text-violet" width="20px">Nom (*)</label>
        <p></p>
        <input type="name" id="name" placeholder="écrire ici" class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
        <p class="mb-5"></p>

        <label class="text-violet" width="20px">Prénom (*)</label>
        <p></p>
        <input type="name" id="forname" placeholder="écrire ici" class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
        <p class="mb-5"></p>
      </form>
    </div>


    <div class="mt-5  pb-10 flex flex-col mr-[2rem] ml-[2rem] text-white">
      <form>
        <label class="text-violet" width="50px">Email (*)</label>
        <p></p>
        <input type="email" id="login" placeholder="écrire ici" class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
        <p class="mb-5"></p>
      </form>
      <form>
      <label class="text-violet" width="50px">Créer un mot de passe (*) </label><p></p>
      <input  type="password" id="passwd" placeholder="écrire ici" class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0" >
      <p></p>

      <label class="text-violet" width="50px">Confirmation mot de passe (*) </label><p></p>
      <input  type="password" id="passwdconfirm" placeholder="écrire ici" class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0" >
      <p></p>
      </form>
      
    

      <div class="flex flex-row justify-end mt-5">
        <p class="">J'ai déjà un compte</p>
        <RouterLink to="/Connexion">
            <p class="text-violet">je me connecte</p>
        </RouterLink>

        <RouterLink to="/Inscription"><button class="p-1 pl-3 pr-3  m-1 text-noirbackground font-bold rounded-full bg-white" v-on:click="login()">inscription</button></RouterLink>
        
        
      </div>
    </div>
    </div>
</template>