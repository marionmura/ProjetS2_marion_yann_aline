<template>
    <div class="pt-20 bg-grisbg text-white">
    <h1 class="ml-[2rem] mr-[2rem] p-4 text-center text-violet border-2 rounded-lg">Inscription</h1>
    
    <div>
        Inscription avec un compte Google
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

        <RouterLink to="/Inscription"><button class="p-1 pl-3 pr-3  m-1 text-noirbackground font-bold rounded-full bg-white" v-on:click="login()">inscription</button></RouterLink>
      </div>

    </div>
</template>