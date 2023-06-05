<template>
  <div style="height:600px; width:800px">
    <l-map ref="map" v-model:zoom="zoom" :center="[47.510356, 6.798466]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker v-for="event in events" :key="event.id" :lat-lng="[event.latitude, event.longitude]"></l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import { getAllEvents } from '@/backend';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 14,
      events: [],
    };
  },
  async mounted() {
    try {
      this.events = await getAllEvents();
    } catch (error) {
      console.error('Erreur lors de la récupération des événements', error);
    }
  },
};
</script>

<style></style>
