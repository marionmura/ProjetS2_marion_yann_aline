<template>

    <div class="space-y-2 bg-noirbackground lg:bg-transparent lg:mb-10">
        <h1 class="text-violet pt-10 text-center lg:text-white lg:font-cabin lg:text-left lg:px-12 font-medium text-2xl">Vous voulez nous contacter ?</h1>
        <hr class="text-violet lg:relative lg:border-t-2 lg:hidden">
    </div>

    <form>
        <div class="mt-5 flex flex-col mr-[2rem] ml-[2rem] text-white">
            
            <div class="lg:flex lg:mx-64 lg:justify-between">
                <div class="flex flex-col">
                    <label for="nom" class="text-violet mb-1" width="50px">Nom (*)</label>
                    <input type="text" name="nom" placeholder="Entrez votre nom" required class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0">
                </div>

                <div class="flex flex-col">
                    <label for="prenom" class="text-violet mb-1" width="50px">Prénom (*) </label><p></p>
                    <input type="text" name="prenom" placeholder="Entrez votre prénom" required class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0" >
                </div>
            </div>

            <label for="email" class="text-violet mb-1 lg:ml-60" width="50px">Email (*) </label><p></p>
            <input type="email" name="email" placeholder="Entrez votre adresse mail" required class="bg-grisbg border-2 rounded-md text-violet p-2 ml-0 m-1 mb-14 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0 lg:mx-" >
  
            <label for="sujet" class="text-violet mb-1 lg:ml-60" width="50px">Sujet du message (*)</label>
            <input type="text" name="sujet" placeholder="Entrez le sujet de votre demande" required class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 mb-5 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0 lg:mx-60">
        
            <label for="nom" class="text-violet mb-1 lg:ml-60" width="50px">Message (*)</label>
            <textarea name="message" rows="5" placeholder="Entrez votre message" required class="bg-grisbg border-2 rounded-md text-violet p-2 m-1 ml-0 mb-10 focus:outline-none focus:ring-2 focus:ring-rouge focus:border-0 lg:mx-60"></textarea>
        
            <div class="mb-3 lg:mx-60">
                <input class="rounded-full mr-2" type="checkbox" id="polcon" name="polcon" required>
                <label class="text-sm" for="polcon">En cliquant ici, vous confirmer avoir lu notre politique de confidentialité.*</label>
            </div>

            <div class="mb-8 lg:mx-60">
                <input class="form-checkbox rounded-full mr-2" type="checkbox" id="accinf" name="accinf" required>
                <label class="text-sm" for="accinf">En soumettant ce formulaire, j'accepte que les informations saisies dans ce formulaire soient utilisées, exploitées, traitées pour permettre de me recontacter.*</label>
            </div>

            <div class="flex font-bold text-lg p-3 justify-center mb-8">
                <input class="bg-violet text-grisbg rounded-full py-2 px-14 lg:cursor-pointer" type="submit" value="Envoyer">
            </div>
        </div>
    </form>

    <p class="text-sm p-1 lg:p-5">Les champs avec (*) sont obligatoires</p>
</template>