<script setup lang="ts">
    import { estConnecté } from '@/auth'
    import { formatDate } from '@/helper'
    import { oneEvent } from '@/backend'
    const props = defineProps<{
      id: string
    }>()
    const unEvent = await oneEvent(props.id)
    console.log(unEvent)  
</script>

<template>

  <div v-if="estConnecté" class="mx-auto my-20 max-w-2xl space-y-3">
      <div class="justify-center flex">
        <div v-if="unEvent.sport === 'football'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/football.webp" alt="football">
        </div>

        <div v-if="unEvent.sport === 'basketball'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/basketball.jpg" alt="basket">
        </div>

        <div v-if="unEvent.sport === 'badminton'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/badminton.jpg" alt="badminton">
        </div>

        <div v-if="unEvent.sport === 'fitness'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/fitness.jpg" alt="fitness">
        </div>

        <div v-if="unEvent.sport === 'natation'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/natation.jpg" alt="natation">
        </div>

        <div v-if="unEvent.sport === 'other'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/othersport.jpg" alt="other">
        </div>

        <div v-if="unEvent.sport === 'padel'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/padel.jpg" alt="padel">
        </div>

        <div v-if="unEvent.sport === 'petanque'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/petanque.jpg" alt="petanque">
        </div>

        <div v-if="unEvent.sport === 'randonnee'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/randonnee.jpg" alt="randonnee">
        </div>

        <div v-if="unEvent.sport === 'running'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/running.jpg" alt="running">
        </div>

        <div v-if="unEvent.sport === 'tennis'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/tennis.jpg" alt="tennis">
        </div>

        <div v-if="unEvent.sport === 'volley'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/volley.jpg" alt="volley">
        </div>

        <div v-if="unEvent.sport === 'vtt'">
          <img class="rounded flex transition-all duration-300 ease-in-out" src="@/../public/img/vtt.jpg" alt="vtt">
        </div>
      </div> 

      <div class="mx-auto my-20 max-w-2xl space-y-3 px-6 py-20">
          <strong><h3>{{ unEvent.title }}</h3></strong>
          <ul class="divide-y">
              <li class="grid grid-cols-4 items-center py-4">
                <span class="col-span-1 text-sm font-bold uppercase">Date</span>
                <span class="col-span-3">{{ formatDate(unEvent.date_start) }}</span>
              </li>
              <li class="grid grid-cols-4 items-center py-4">
                <span class="col-span-1 text-sm font-bold uppercase">Lieu</span>
                <span class="col-span-3">{{ unEvent.place }}</span>
              </li>
              <li class="grid grid-cols-4 items-center py-4">
                <span class="col-span-1 text-sm font-bold uppercase">Sport</span>
                <span class="col-span-3">{{ unEvent.sport }}</span>
              </li>
              <li class="grid grid-cols-4 items-center py-4">
                <span class="col-span-1 text-sm font-bold uppercase">Nombres de participants</span>
                <span class="col-span-3">{{ unEvent.nb_participant }}</span>
              </li>
            </ul>
        </div>  
  </div>


  <div v-else>
      <h1>Pas de compte correspondant</h1>
  </div> 

</template>
