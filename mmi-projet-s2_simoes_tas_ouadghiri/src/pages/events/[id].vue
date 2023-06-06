<script setup lang="ts">
import { pb } from '@/backend'
  // @ts-ignore
import { oneEvent } from '@/backend'
const props = defineProps<{
  id: string
}>()
const unEvent = await oneEvent(props.id)
console.log(unEvent)  

</script>

<template>
  <div v-if="unEvent" class="mx-auto my-20 max-w-2xl space-y-3">
    <div class="grille relative lg:grid lg:pt-12">  
      <img class="col-span-10" src="" alt="">
      <header class="col-span-12 col-start-12">
        <h1 class="my-12">{{ unEvent.title }}</h1>
          <p class="grid grid-cols-1 items-center py-4">
            {{ unEvent.sport }}
          </p>
      </header>
    </div>
  </div>
</template>
