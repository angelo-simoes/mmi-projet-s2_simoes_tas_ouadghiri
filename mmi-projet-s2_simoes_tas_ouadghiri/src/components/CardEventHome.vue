<script setup lang="ts">
import { formatDate } from '@/helper'
import type { EventsResponse } from '@/pocketbase-types';
import { deleteEvent } from '@/backend';
const props: EventsResponse = defineProps<EventsResponse>()
import  IconDelete  from '@/components/icons/IconDelete.vue';


const url = `/events/${props.id}`
</script>

<template>
    <article
    class="group col-span-4 grid grid-cols-[24px_1fr] grid-rows-[200px_48px_1fr] lg:grid-cols-[2fr_11fr] mb-16"
  >
  <div v-if="props.sport === 'football'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/football.webp" alt="football">
  </div>

  <div v-if="props.sport === 'basketball'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/basketball.jpg" alt="basket">
  </div>

  <div v-if="props.sport === 'badminton'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/badminton.jpg" alt="badminton">
  </div>

  <div v-if="props.sport === 'fitness'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/fitness.jpg" alt="fitness">
  </div>

  <div v-if="props.sport === 'natation'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/natation.jpg" alt="natation">
  </div>

  <div v-if="props.sport === 'other'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/othersport.jpg" alt="other">
  </div>

  <div v-if="props.sport === 'padel'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/padel.jpg" alt="padel">
  </div>

  <div v-if="props.sport === 'petanque'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/petanque.jpg" alt="petanque">
  </div>

  <div v-if="props.sport === 'randonnee'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/randonnee.jpg" alt="randonnee">
  </div>

  <div v-if="props.sport === 'running'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/running.jpg" alt="running">
  </div>

  <div v-if="props.sport === 'tennis'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/tennis.jpg" alt="tennis">
  </div>

  <div v-if="props.sport === 'volley'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/volley.jpg" alt="volley">
  </div>

  <div v-if="props.sport === 'vtt'" class="col-span-2 row-start-1 col-start-1 relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:transition-all before:duration-300 before:ease-in-out">
    <img class="rounded flex-[1_0_100%] transition-all duration-300 ease-in-out" src="../../public/img/vtt.jpg" alt="vtt">
  </div>

    <h3 class="z-[1] col-start-2 row-start-1 my-6 mr-4 self-end font-sans text-3xl text-white">
      <RouterLink :to="`${url}`">{{ props.title }}</RouterLink>
    </h3>

    <div class="z-[2] col-span-2 col-start-1 row-span-2 row-start-2 space-y-4 bg-white p-6">
      <div class="flex justify-between">
        <p class="uppercase font-semibold">{{ props.sport }}</p>
        <p class="uppercase font-semibold">{{ props.nb_participant }} personnes</p>
      </div>
      
      <p class="uppercase">{{ formatDate(props.date_start) }}</p>
      <p>{{ props.place }}</p>
      <div class="flex justify-between">
        <RouterLink :to="`${url}`" class="inline-block border-b-2 border-black uppercase font-medium" >VOIR</RouterLink>
        <button @click="deleteEvent(props.id)"><IconDelete ></IconDelete></button>
      </div>

    </div>
  </article>
  
</template>



