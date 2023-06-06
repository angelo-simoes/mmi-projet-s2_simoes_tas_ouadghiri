    <script setup lang="ts">
      import { estConnecté } from '@/auth'
      import { RouterLink } from 'vue-router'
      import type { EventsResponse } from '@/pocketbase-types';
      import { ref, onMounted } from "vue";
      import CardEvent from '@/components/CardEventLogin.vue'
      import { getAllEvents, getAllEventsBySport } from '@/backend';
      import  IconAdd  from '@/components/icons/IconAdd.vue';

      const allEvents = ref<EventsResponse[]>([]);
      onMounted(async () => {
      allEvents.value = await getAllEvents();
      console.log(allEvents.value);
      });
    </script>

    <template>
    
    <div v-if="estConnecté" class="grille my-24">
        <div class="col-span-4 content-center mt-12 mb-16">
          <RouterLink class="flex justify-center" to="/events/create">
            <IconAdd/>
          </RouterLink>
          <h3 class="mt-8 flex justify-center text-center font-sans">Créer un évènement</h3>
        </div>
        <CardEvent v-for="event in allEvents" v-bind="{...event}" :key="event.id"/>
    </div>
    </template>
                    

