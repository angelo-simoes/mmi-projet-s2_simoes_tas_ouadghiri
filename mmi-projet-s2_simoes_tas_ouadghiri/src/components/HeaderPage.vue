<script setup lang="ts">
    const menuIsOpen = ref(false)
    const registerIsOpen = ref(false)
    const loginIsOpen = ref(false)
    import { RouterLink } from 'vue-router';
    import PocketBase from 'pocketbase';
    import { onMounted, ref } from 'vue';


    let pb = null;
    const currentUser = ref();
    const mail = ref("");
    const password = ref("");
    const username = ref("");
    const loginMode = ref(true);

    onMounted ( async () => {
        pb = new PocketBase('http://127.0.0.1:8090');

        pb.authStore.onChange(()=>{
            currentUser.value = pb.authStore.model
        },true)
    });

    const doCreateAccount = async () => {
    try{
    const data = {
        "username": username.value,
        "email": mail.value,
        "emailVisibility": true,
        "password": password.value,
        "passwordConfirm": password.value,
    };

    const record = await pb.collection('users').create(data);

    await doLogin ();
    } catch (error) {
        alert (error.message)
    }
}

    const doLogout = () => {
        pb.authStore.clear();

    }

    const doLogin = async () => {
        try {
        const authData = await pb.collection('users')
            .authWithPassword(mail.value,password.value);

        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model);

        } catch (error) {
            alert(error.message)
        }   

    }

</script>

<template>
    <header class="flex items-center justify-between px-4 h-20 border-b-2 border-b-indigo-100 gap-8 bg-orange-600">
        <RouterLink to="/">
            <img src="/src/img/CoohopLogo.svg" alt="Logo CooHop">
        </RouterLink>

        <button class="h-3 w-6 flex flex-col justify-between lg:hidden" @pointerdown="menuIsOpen = !menuIsOpen" aria-controls="menuIsOpen" aria-expanded="true">
            <span class="block h-[2px] w-full bg-white transition duration-300" :class="{ 'translate-y-[5px] rotate-45' : menuIsOpen}"></span>
            <span class="block h-[2px] w-full bg-white transition duration-300" :class="{ '-translate-y-[5px] -rotate-45' : menuIsOpen}"></span>
        </button>

            <nav class="invisible opacity-0 fixed z-10 bg-indigo-50 inset-0 mt-20 flex flex-col justify-between py-12 px-6 lg:visible lg:opacity-100 lg:static lg:mt-0 lg:flex-row lg:bg-transparent lg:flex-1"
            :class="{'!visible !opacity-100' : menuIsOpen}">
                <ul class="flex flex-col gap-4 lg:flex-row lg:items-center ">
                    <li>
                        <RouterLink class="active block p-4 rounded-lg text-white" to="">Rent</RouterLink>
                    </li>
                    <li><RouterLink class="block p-4 rounded-lg text-white" to="">Rechercher</RouterLink></li>
                    <li><RouterLink class="block p-4 rounded-lg text-white" to="">Évènements</RouterLink></li>
                    <li><RouterLink class="block p-4 rounded-lg text-white" to="">Messagerie</RouterLink></li>
                </ul>
                <div class="flex items-center gap-4 px-4">
                        <button @pointerdown="loginIsOpen = ! loginIsOpen" class="flex-1 p-3 rounded-lg border-2 border-white font-bold text-white lg:flex-none lg:px-6">Se connecter</button>
                        <button @pointerdown="registerIsOpen = !registerIsOpen" class="flex-1 p-3 rounded-lg bg-orange-600 text-white font-bold lg:flex-none lg:px-6">S'inscrire</button>
                </div>
            </nav>
    </header>
  <div v-show="loginIsOpen" class="fixed top-0 left-0 w-full h-full flex items-center justify-center">
    <div class="bg-white p-6 rounded shadow-md">
      <h2 class="text-2xl mb-4">Formulaire</h2>
      <form>
        <!-- Ajoutez vos champs de formulaire ici -->
        <input type="text" placeholder="Nom" class="flex border border-gray-300 px-4 py-2 rounded-md mb-2">
        <input type="email" placeholder="Email" class="flex border border-gray-300 px-4 py-2 rounded-md mb-2">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Se connecter</button>
      </form>
      <button @pointerdown="loginIsOpen = !loginIsOpen" class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Fermer</button>
    </div>
  </div>

  <div v-show="registerIsOpen" class="fixed top-0 left-0 w-full h-full flex items-center justify-center">
    <div class="bg-white p-6 rounded shadow-md">
      <h2 class="text-2xl mb-4">Formulaire</h2>
      <form v-on:submit="doCreateAccount">
        <!-- Ajoutez vos champs de formulaire ici -->
        <input v-model="username" id="username" name="username" type="text" autocomplete="none" placeholder="Nom d'utilisateur" required class=" w-72 mt-2 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <input v-model="mail" id="mail" name="mail" type="email" autocomplete="none" placeholder="Email" required class=" w-72 mt-2 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <input v-model="password" id="password" name="password" type="password" autocomplete="none" placeholder="Mot de passe" required class=" w-72 mt-4 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">S'inscrire</button>
      </form>
      <button @pointerdown="registerIsOpen = !registerIsOpen" class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Fermer</button>
    </div>
  </div>
</template>