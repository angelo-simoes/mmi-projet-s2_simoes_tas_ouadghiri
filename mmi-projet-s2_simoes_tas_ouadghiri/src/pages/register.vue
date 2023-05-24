<template>
  <div v-if="currentUser" class="mt-24 ">
    <h1>Welcome {{ currentUser?.name }}</h1>
          <div>
              <button type="button" @click="doLogout"
               class="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LogOut</button>
          </div>
  
  </div>
  

  <div v-else>  
    <div class=" flex flex-col justify-center items-center mt-10 ">
        <input v-model="username" id="username" name="username" type="text" autocomplete="none" placeholder="Nom d'utilisateur" required class=" w-72 mt-2 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <input v-model="mail" id="mail" name="mail" type="email" autocomplete="none" placeholder="Email" required class=" w-72 mt-2 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <input v-model="password" id="password" name="password" type="password" autocomplete="none" placeholder="Mot de passe" required class=" w-72 mt-4 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
    </div>
    <div class="flex justify-center space-x-10 mt-14">
      <button type="button" @click="doCreateAccount"
      class="flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">S'inscrire</button>
    </div>

  </div>
  
  </template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PocketBase from 'pocketbase';
import { onMounted, ref } from 'vue';


let pb = null;
const currentUser = ref();
const username = ref("");
const mail = ref("");
const password = ref("");

const loginMode = ref(true);

onMounted ( async () => {
    pb = new PocketBase('http://127.0.0.1:8090');

    pb.authStore.onChange(()=>{
         currentUser.value = pb.authStore.model
    },true)
});

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
</script>
