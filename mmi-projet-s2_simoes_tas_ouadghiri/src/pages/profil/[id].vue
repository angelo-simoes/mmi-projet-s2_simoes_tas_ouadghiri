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
      <div class="justify-center flex">
        <img class="h-48 rounded-full justify-center flex" :src="urlImg0" alt="">
      </div> 

      <div class="mx-auto my-20 max-w-2xl space-y-3 px-6 py-20">
          <strong><h3>{{ estConnecté.username }}</h3></strong>
          <ul class="divide-y">
              <li class="grid grid-cols-4 items-center py-4">
                <span class="col-span-1 text-sm font-bold uppercase">Bio</span>
                <span class="col-span-3">{{ estConnecté.bio }}</span>
              </li>
            </ul>
        </div>
        <div class="flex justify-center">
          <RouterLink :to="`${url}`" class="flex-1 p-3 rounded-lg bg-orange-600 font-bold text-white lg:flex-none lg:px-6">Modifier le profil</RouterLink>
        </div>    
  </div>

  <div v-else>
      <h1>Pas de compte correspondant</h1>
  </div> 

</template>
