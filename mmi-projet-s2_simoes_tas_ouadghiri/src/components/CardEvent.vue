<script setup lang="ts">
import { formatDate } from '@/helper'
import type { EventsResponse } from '@/pocketbase-types';
const props: EventsResponse = defineProps<EventsResponse>()
/*const props = defineProps<{
  id: number
  title: string
  date_end: string
  date_start: string
  place: string
  sport?: string
}>()*/

const url = `/events/${props.id}`
</script>

<template>     
    <section class="grid-cols-2 gap-5 mx-5">
        <div class=" relative bg-gray-400 rounded-xl max-w-[120px] justify-center p-5 ">
            <p class="font-bold text-purple-600 text-center" >{{ props.title }}</p>
            <p class="text-center text-purple-800">{{ props.place }}</p>
        </div>
    </section>

</template>


<!--
<template>
  <article
    class="group col-span-4 grid grid-cols-[24px_1fr] grid-rows-[200px_48px_1fr] lg:grid-cols-[2fr_11fr]"
  >
    <img
      :imgPath="img"
      :imgAlt="imgAlt"
      classPicture="group-hover:before:bg-black col-start-1 row-start-1 col-span-2 row-span-2"
      classImg="group-hover:grayscale-0 group-hover:mix-blend-normal"
    />
    <h3 class="z-[1] col-start-2 row-start-1 my-6 mr-4 self-end font-serif text-3xl text-white">
      <a :href="`${url}`">{{ title }}</a>
    </h3>
    <div class="z-[2] col-span-1 col-start-2 row-span-2 row-start-2 space-y-4 bg-white p-6">
      <p class="uppercase">{{ formatDate(date_start) }}</p>
      <p>{{ sport }}</p>
      <a class="inline-block border-b-2 border-black uppercase" :href="`${url}`">Plus d'info</a>
    </div>
  </article>
</template>

-->

