<script setup lang="ts">
    import { estConnecté } from '@/auth'
    import { pb } from '@/backend'
    const urlImg0 = estConnecté.value && estConnecté.value.avatar ? pb.getFileUrl(estConnecté.value, estConnecté.value.avatar, { thumb: '250x250' }) : '/image-not-found.png'
    console.log(urlImg0)  
    console.log(estConnecté)

    const url = estConnecté.value ? `/profil/update/${estConnecté.value.id}` : '';
</script>

<template>
  <div v-if="estConnecté" class="mx-auto my-20 max-w-2xl space-y-3">
    <img class="rounded-full justify-center flex" :src="urlImg0" alt="">
    <div
     class="grille relative lg:grid lg:pt-12">
      <div class="col-span-12 col-start-12">
        <h1 class="my-12">{{ estConnecté.username }}</h1>
          <p class="grid grid-cols-1 items-center py-4">
            {{ estConnecté.bio }}t
          </p>
          <RouterLink :to="`${url}`">Modifier le profil</RouterLink>
        </div>
    </div>
  </div>


  <div v-else>
    <h1>Pas de compte correspondant</h1>
  </div>
</template>

