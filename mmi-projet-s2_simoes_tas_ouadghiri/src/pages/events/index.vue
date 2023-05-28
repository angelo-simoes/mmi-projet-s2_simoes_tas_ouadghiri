    <script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import type { EventsResponse } from '@/pocketbase-types';
    import { ref, onMounted } from "vue";
    import CardEvent from '@/components/CardEvent.vue'
    import { getAllEvents } from '@/backend';
    const allEvents = ref<EventsResponse[]>([]);
    onMounted(async () => {
  // Appel à getAllEvents dans le hook onMounted
    allEvents.value = await getAllEvents();
    console.log(allEvents.value);
    });
    //const allEvents = await getAllEvents();
    </script>

    <template>
    Test affichage
    <div class="grille my-24">
        <CardEvent v-for="event in allEvents" v-bind="event" :key="event.id" :event="event" />
    </div>
    </template>
