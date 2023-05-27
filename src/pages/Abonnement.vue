<script setup lang="ts">
import Usericon from '../components/icons/Usericon.vue'
</script>


<template>
    <main class="bg-grisbg text-white">
        <div>
            <div class="flex flex-row justify-around items-center">
                <Usericon class="h-[40px]"/>
                <p>Nom Prénom utilisateur</p>
            </div>
            <h2>Souscrire à l'abonnement premium</h2>
            <ul>
                <li><p>Seulement 4 € par mois</p></li>
                <li><p>Annulez à tout moment. Offre soumise à des conditions.</p></li>
            </ul>

            <div class="text-violet grid grid-cols-2 ">
                <p>Début de la facturation</p>
                <p>Aujourd'hui</p>
            
                <p>Prochaine facturation</p>
                <p>08 Juin 2023</p>
            </div>
        </div>


        <fieldset>
            <legend class="pt-[20px] text-violet ">Moyen de paiement</legend>

            <div class="text-violet activecheckbox">
                <input type="radio" id="CB" name="paiement" value="CB" checked class="">
                <label for="CB">Carte de crédit ou débit</label>
            </div>

            <div class="text-violet">
                <input type="radio" id="paypal" name="paiement" value="paypal">
                <label for="paypal">Paypal</label>
            </div>
        </fieldset>        

        <h3 class="mt-[20px]">Information de paiement</h3>
        <form>
        <div class="">
            <label class="text-violet" width="50px">Numéro de carte</label>
            <p></p>
            <input type="text" id="cartenb" placeholder="0000 0000 0000 0000" required  class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 focus:outline-none focus:ring-2 focus:ring-vert focus:border-0">
            <p class="mb-5"></p>
        
            <div class="grid grid-cols-2">
                <div>
                    <label class="text-violet" width="50px">Date d'expiration</label>
                <input  type="date" id="date" placeholder="MM/AA" required class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 focus:outline-none focus:ring-2 focus:ring-vert focus:border-0"  w-full >
                </div>
                
                <div>
                    <label class="text-violet" width="50px">Code de sécurité</label>
                <input  type="texte" id="code" placeholder="000" required class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 my-1 focus:outline-none focus:ring-2 focus:ring-vert focus:border-0 w-full" >
                </div>
                
                
            </div>
            
        </div>

        <input  type="checkbox" id="date" required class="" >
        <label class="text-violet" width="50px">J'accepte les conditions générales de vente d'IAmateur</label><p></p>
        </form>

        <div class="flex flex-row justify-around">
            <button class="bg-violet text-grisbg font-bold px-3 py-1 rounded-full ">souscrire</button>
        </div>
        
    </main>
</template>