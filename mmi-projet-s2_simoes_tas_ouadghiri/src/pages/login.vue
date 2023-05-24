<script setup lang="ts">
import { login } from '@/backend'
</script>
<template>
    <div>
      <label width="50px">Email    : </label><input class="border-amber-900" type="email" id="id">
      <br>
      <label width="50px">Mot de passe : </label><input class="border-amber-900" type="password" id="passwd">
      <br>
      <button class="flex-1 p-3 rounded-lg bg-orange-600 text-white font-bold lg:flex-none lg:px-6" v-on:click="login()">Se connecter</button><p></p>
    </div>
</template>
