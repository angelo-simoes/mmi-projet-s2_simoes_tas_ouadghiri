<template>
  <div class="mx-auto my-20 max-w-2xl space-y-3 px-6">
    <h1 class="text-2xl font-bold my-4">Modifier le profil</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="username" class="block font-bold mb-1 text-orange-600">Username</label>
        <input v-model="userData.username" type="text" id="username" :placeholder="estConnecté?.username" class="border border-gray-300 rounded-md p-2 w-full" required>
      </div>
      <div class="mb-4">
        <label for="bio" class="block font-bold mb-1 text-orange-600">Bio</label>
        <input v-model="userData.bio" type="text" id="bio" :placeholder="estConnecté?.bio ?? 'Bio'" class="border border-gray-300 rounded-md p-2 w-full" required>
      </div>
      <div class="mb-4">
        <label for="avatar" class="block font-bold mb-1 text-orange-600">Avatar</label>
        <input type="file" id="avatar" ref="avatarInput" class="border border-gray-300 rounded-md p-2 w-full">
      </div>
      <button type="submit" class="float-right bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md">Modifier</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { estConnecté } from '@/auth';
import { ref, onMounted } from 'vue';
import { updateUser } from '@/backend';
import type { UsersRecord } from '@/pocketbase-types';
import { useRouter } from 'vue-router';

const router = useRouter();

const userData = ref<UsersRecord>({
  username: '',
  bio: '',
});
const avatarInput = ref<HTMLInputElement | null>(null);

async function submitForm() {
  try {
    if (estConnecté.value !== null) {
      const avatarFile = avatarInput.value?.files ? avatarInput.value?.files[0] : null;

      await updateUser(estConnecté.value.id, {
        username: userData.value.username ?? '',
        bio: userData.value.bio ?? '',
        avatar: avatarFile ?? undefined,
      });
    }

    console.log('Profil modifié avec succès');

    // Réinitialiser le formulaire
    userData.value = {
      username: '',
      bio: '',
    };

    if (estConnecté.value !== null) {
      router.push(`/profil/${estConnecté.value.id}`);
    }
  } catch (error) {
    console.error('Erreur lors de la modification du profil', error);
  }
}

onMounted(() => {
  avatarInput.value = document.getElementById('avatar') as HTMLInputElement;
});
</script>
