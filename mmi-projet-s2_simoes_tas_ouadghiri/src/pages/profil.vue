<script setup lang="ts">
    import { estConnecté } from '@/auth'
    import { ref } from 'vue';
    import { pb } from '@/backend'

</script>

<template>
    <h1>salut {{ estConnecté?.username }}</h1>
  <div class="mx-auto my-20 max-w-2xl px-6">
    <div class="flex items-center space-x-4">
      <img :src="estConnecté?.username" alt="Avatar" class="w-16 h-16 rounded-full">
      <div>
        <h1 class="text-2xl font-bold">{{ estConnecté?.username }}</h1>
      </div>
    </div>
    <div class="mt-8">
      <h2 class="text-lg font-bold">Biographie</h2>
      <p>{{ estConnecté?.bio }}</p>
    </div>
  </div>
</template>

