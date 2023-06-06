<script setup lang="ts">
  import { estConnecté } from '@/auth'
  import { pb } from '@/backend'
  import { ref } from 'vue';
  import { updateUser } from '@/backend';
  import type { UsersRecord } from '@/pocketbase-types';


  const urlImg0 = estConnecté.value && estConnecté.value.avatar ? pb.getFileUrl(estConnecté.value, estConnecté.value.avatar, { thumb: '250x250' }) : '/image-not-found.png';
  console.log(urlImg0);
  console.log(estConnecté);

  const userData = ref<UsersRecord>({
    username: '',
    bio: '',
  });


  async function submitForm() {
  try {
    await updateUser(userData.value);
    console.log('Profil modifié avec succès');
    // Réinitialiser le formulaire
    userData.value = {
      username: '',
      bio: '',
    };
  } catch (error) {
    console.error('Erreur lors de la modification du profil', error);
  }
}


</script>

<template>
  <div class="mx-auto my-20 max-w-2xl space-y-3 px-6">
    <h1 class="text-2xl font-bold my-4">Créer un événement</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="title" class="block font-bold mb-1 text-orange-600">Nom de l'évènement</label>
        <input v-model="userData.username" type="text" id="title" class="border border-gray-300 rounded-md p-2 w-full" required>
      </div>
      <div class="mb-4">
        <label for="nbParticipants" class="block font-bold mb-1 text-orange-600">Nombre de participants</label>
        <input v-model="userData.bio" type="number" id="nbParticipants" class="border border-gray-300 rounded-md p-2 w-full" required>
      </div>
      <button type="submit" class="float-right bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md">Créer</button>
    </form>
  </div>
</template>
