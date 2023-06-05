<template>
    <div class="mx-auto my-20 max-w-2xl space-y-3 px-6">
      <h1 class="text-2xl font-bold my-4">Créer un événement</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="title" class="block font-bold mb-1 text-orange-600">Nom de l'évènement</label>
          <input v-model="eventData.title" type="text" id="title" class="border border-gray-300 rounded-md p-2 w-full" required>
        </div>
        <div class="mt-2">
          <label class="block font-bold mb-1 text-orange-600">Sport</label>
          <select v-model="eventData.sport" class="border border-gray-300 rounded-md p-2 w-full" required>
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
        <div class="mb-4">
          <label for="dateStart" class="block font-bold mb-1 text-orange-600">Date de début</label>
          <input v-model="eventData.date_start" type="datetime-local" id="dateStart" class="border border-gray-300 rounded-md p-2 w-full" required>
        </div>
        <div class="mb-4">
          <label for="place" class="block font-bold mb-1 text-orange-600">Lieu</label>
          <!-- <input v-model="eventData.place" type="text" id="place" class="border border-gray-300 rounded-md p-2 w-full" required>-->
          <input v-model="eventData.place" type="text" id="place" class="border border-gray-300 rounded-md p-2 w-full" required @input="fetchAddressSuggestions">
            <ul v-if="addressSuggestions.length > 0" class="bg-white border border-gray-300 rounded-md mt-2 p-2">
                <li v-for="suggestion in addressSuggestions" :key="suggestion.place_id" @click="selectAddressSuggestion(suggestion)">{{ suggestion.display_name }}</li>
            </ul>
        </div>
        <button type="submit" class="float-right bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md">Créer</button>
      </form>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';
  import { createEvent } from '@/backend';
  import type { EventsRecord } from '@/pocketbase-types';
  import { parseISO } from 'date-fns';
  import axios from 'axios';
  
  const eventData = ref<EventsRecord>({
    title: '',
    date_start: '',
    date_end: '',
    place: '',
    sport: '',
  });
  
const addressSuggestions = ref([]);

async function fetchAddressSuggestions() {
  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: eventData.value.place,
        format: 'json',
        limit: 5,
      },
    });

    addressSuggestions.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des suggestions d\'adresse', error);
  }
}

function selectAddressSuggestion(suggestion) {
  eventData.value.place = suggestion.display_name;
  addressSuggestions.value = [];
}

  async function submitForm() {
  try {
    const eventDataWithISODate: EventsRecord = {
      ...eventData.value,
      date_start: parseISO(eventData.value.date_start).toISOString(),
      date_end: parseISO(eventData.value.date_end).toISOString(),
    };

    await createEvent(eventDataWithISODate);

    console.log('Événement créé avec succès');
    // Réinitialiser le formulaire
    eventData.value = {
      title: '',
      date_start: '',
      date_end: '',
      place: '',
      sport: '',
    };
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement', error);
  }
}


  </script>
