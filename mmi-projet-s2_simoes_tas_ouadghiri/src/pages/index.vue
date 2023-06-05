<script setup lang="ts">
    import { logout, estConnecté } from '@/auth'
    import { ref } from 'vue';
</script>

<template>
      <h1>salut {{ estConnecté?.username }}</h1>
      
  <main>
    <TheWelcome />
  </main>
</template>
