<script setup lang="ts">
	import LogoIcon from '@/components/icons/CoohopLogo.vue'
  import { logout, estConnecté, login } from '@/auth'
  import { RouterLink } from 'vue-router';
  const url = estConnecté.value ? `/profil/${estConnecté.value.id}` : '';
</script>

<template>
    <footer class="grille space-y-6 bg-orange-600 py-16 px-6 text-white lg:space-y-0">
        <div class="mb-12">
          <RouterLink to="/">
            <LogoIcon/>  
          </RouterLink>
        </div>
      <nav class="space-y-4 col-span-3 col-start-7">
        <h3 class="font-bold uppercase">Menu</h3>
        <ul class="lg:space-y-4 uppercase font-medium">
            <li><RouterLink to="/events">mes évènements</RouterLink></li>
            <li><RouterLink :to="`${url}`">profil</RouterLink></li>
        </ul>
        <ul class="lg:space-y-4 font-light text-sm">
            <li><RouterLink to="/mentions">Mentions légales</RouterLink></li>
            <li><RouterLink to="rgpd">RGPD</RouterLink></li>
        </ul>
      </nav>
  
      <div class="col-span-3 col-start-10 space-y-3">
        <h3 class="font-bold uppercase">contact</h3>
        <address>
          4 place Tharradin<br />25200 Montbéliard<br /> <a href="mailto:coohop.sot@gmail.com">coohop.sot@gmail.com</a>
        </address>
      </div>
      <p class="col-span-12 text-xs">CooHop! s’engage à ne prendre aucune responsabilité en cas de problème sur un terrain. Les terrains sont publics, et n'appartiennent en aucun cas au joueur ou à l'équipe CooHop!. En cas de terrain occupé lors de votre arrivé, nous ne sommes, en aucun cas, pas responsables. Nous écrire pour en savoir plus.</p>

    </footer>
  </template>