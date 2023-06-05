<script setup lang="ts">
	import LogoIcon from '@/components/icons/CoohopLogo.vue'
  import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="grille space-y-6 bg-orange-600 py-16 px-6 text-white lg:space-y-0">
        <div class="mb-12">
          <RouterLink to="/">
            <LogoIcon/>  
          </RouterLink>
        </div>
      <nav class="space-y-4 col-span-3 col-start-7">
        <ul class="lg:space-y-4">
            <li><RouterLink to="/events">Evènements</RouterLink></li>
            <li><RouterLink to="/profil">Profil</RouterLink></li>
        </ul>
      </nav>
  
      <div class="col-span-3 col-start-10 space-y-3">
        <h4 class="font-bold uppercase">ADRESSE</h4>
        <p>Fondation Cartier</p>
        <address>
          261 Bd Raspail<br />75014 Paris<br />
        </address>
      </div>

    </footer>
  </template>