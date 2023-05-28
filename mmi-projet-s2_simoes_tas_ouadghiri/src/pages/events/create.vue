<template>
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold my-4">Créer un événement</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="title" class="block font-bold mb-1">Titre</label>
          <input v-model="eventData.title" type="text" id="title" class="border border-gray-300 rounded-md p-2 w-full" required>
        </div>
        <div class="mb-4">
          <label for="dateStart" class="block font-bold mb-1">Date de début</label>
          <input v-model="eventData.date_start" type="datetime-local" id="dateStart" class="border border-gray-300 rounded-md p-2 w-full" required>
        </div>
        <div class="mb-4">
          <label for="dateEnd" class="block font-bold mb-1">Date de fin</label>
          <input v-model="eventData.date_end" type="datetime-local" id="dateEnd" class="border border-gray-300 rounded-md p-2 w-full" required>
        </div>
        <div class="mb-4">
          <label for="place" class="block font-bold mb-1">Lieu</label>
          <input v-model="eventData.place" type="text" id="place" class="border border-gray-300 rounded-md p-2 w-full" required>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Créer</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { createEvent } from '@/backend';
  import type { EventsRecord } from '@/pocketbase-types';
  
  const eventData = ref<EventsRecord>({
    title: '',
    date_start: '',
    date_end: '',
    place: '',
  });
  
  async function submitForm() {
    try {
    const eventDataWithISODate: EventsRecord = {
      ...eventData.value,
      date_start: new Date(eventData.value.date_start).toISOString(),
      date_end: new Date(eventData.value.date_end).toISOString(),
    };

    await createEvent(eventDataWithISODate);

    console.log('Événement créé avec succès');
    // Réinitialiser le formulaire
    eventData.value = {
      title: '',
      date_start: '',
      date_end: '',
      place: '',
    };
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement', error);
  }
   /* try {
      await createEvent(eventData.value);
      console.log('Événement créé avec succès');
      // Réinitialiser le formulaire
      eventData.value = {
        title: '',
        date_start: '',
        date_end: '',
        place: '',
      };
    } catch (error) {
      console.error('Erreur lors de la création de l\'événement', error);
    }*/
  }
  </script>