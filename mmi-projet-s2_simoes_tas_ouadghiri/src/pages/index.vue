<script setup lang="ts">
import { LMap, LTileLayer, LMarker, LPopup,} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { ref, onMounted, watch } from "vue";
import { getAllEvents, getAllEventsBySport } from "@/backend";
import { formatDate } from "@/helper";
import  IconAdd  from '@/components/icons/IconAdd.vue';
import CardEvent from '@/components/CardEvent.vue'
import { RouterLink } from 'vue-router'
import type { EventsResponse } from '@/pocketbase-types';

const zoom = ref(14);
const isEventModalOpen = ref(false);
const selectedEvent = ref(null);
const openEventModal = (event: null) => {
  selectedEvent.value = event;
  isEventModalOpen.value = true;
};

const closeEventModal = () => {
  isEventModalOpen.value = false;
  selectedEvent.value = null;
};


const allEvents = ref<EventsResponse[]>([]);
const events = ref<EventsResponse[]>([]);
      onMounted(async () => {
      events.value = await getAllEvents();
      allEvents.value = await getAllEvents();
      console.log(events.value);
});




const selectedSport = ref('all'); // Valeur par défaut du picker
      const fetchEventsBySport = async () => {
        switch (selectedSport.value) {
          case 'all':
            allEvents.value = await getAllEvents();
            break;
          case 'football':
            allEvents.value = await getAllEventsBySport('football');
            break;0
          case 'basketball':
            allEvents.value = await getAllEventsBySport('basketball');
            break;
          case 'fitness':
            allEvents.value = await getAllEventsBySport('fitness');
            break;
          case 'badminton':
            allEvents.value = await getAllEventsBySport('badminton');
            break;
          case 'natation':
            allEvents.value = await getAllEventsBySport('natation');
            break;
          case 'other':
            allEvents.value = await getAllEventsBySport('othersport');
            break;
          case 'padel':
            allEvents.value = await getAllEventsBySport('padel');
            break;
          case 'petanque':
            allEvents.value = await getAllEventsBySport('petanque');
            break;
          case 'randonnee':
            allEvents.value = await getAllEventsBySport('randonnee');
            break;
          case 'running':
            allEvents.value = await getAllEventsBySport('running');
            break;
          case 'tennis':
            allEvents.value = await getAllEventsBySport('tennis');
            break;
          case 'volley':
            allEvents.value = await getAllEventsBySport('volley');
            break;
          case 'vtt':
            allEvents.value = await getAllEventsBySport('vtt');
            break;
          default:
            allEvents.value = await getAllEvents();
            break;
        }
  };


</script>

<template>
  <div class="mx-auto my-20 max-w-3xl">
    <div class="relative w-full" style="height: 0; padding-bottom: 75%">
    <div class="z-10 absolute inset-0">
      <l-map ref="map" v-model:zoom="zoom" :center="[47.510356, 6.798466]">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
        <l-marker v-for="event in events" :key="event.id" :lat-lng="[event.latitude, event.longitude]" @click="openEventModal(event)">
          <l-popup class="font-bold flex text-orange-600">{{ event.title }}</l-popup>
        </l-marker>
      </l-map>
    </div>
      <div v-if="isEventModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-6 w-1/2">
          <h4 class="text-2xl font-bold mb-4">{{ selectedEvent.title }}</h4>
          <p class="text-gray-600 uppercase font-semibold">{{ selectedEvent.sport }}</p>
          <p class="text-gray-600">{{ selectedEvent.place }}</p>
          <!-- Ajoutez d'autres informations de l'événement ici -->
          <button @click="closeEventModal" class="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Fermer</button>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto my-20 max-w-2xl space-y-3 px-6">
      <select class="my-8 w-full py-2 px-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:w-auto" v-model="selectedSport" @change="fetchEventsBySport">
        <option value="all">Tous</option>
        <option value="football">Football</option>
        <option value="basketball">Basketball</option>
        <option value="badminton">Badlinton</option>
        <option value="fitness">Fitness</option>
        <option value="natation">Natation</option>
        <option value="padel">Padel</option>
        <option value="petanque">Pétanque</option>
        <option value="randonnee">Randonnée</option>
        <option value="running">Running</option>
        <option value="tennis">Tennis</option>
        <option value="volley">Volley</option>
        <option value="vtt">VTT</option>
        <option value="other">Autres sports (préciser dans le titre)</option>
      </select>
  </div>

  <div class="grille my-24">
        <div class="col-span-4 content-center mt-12 mb-16">
          <RouterLink class="flex justify-center" to="/events/create">
            <IconAdd/>
          </RouterLink>
          <h3 class="mt-8 flex justify-center text-center font-sans">Créer un évènement</h3>
        </div>
        <CardEvent v-for="event in allEvents" v-bind="{...event}" :key="event.id"/>
    </div>

</template>



<style>
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
</style>