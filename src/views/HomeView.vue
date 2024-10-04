<script setup lang="ts">
import sourceData from '../assets/data.json'
import { useCounterStore } from '@/stores/Counter.js'
import { ref } from 'vue'

// access the `store` variable anywhere in the component ✨
const store = useCounterStore()
const count = ref(0)

const destinations = sourceData.destinations
</script>

<template>
  <main class="home">
    <h1>destination</h1>
    <div class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.view',
          params: { id: destination.id, slug: destination.slug }
        }"
      >
        <h2>
          {{ destination.name }}
        </h2>
        <img :src="`/images/${destination.image}`" />
      </RouterLink>
      <div>
        {{ store.count }}
        <button @click="store.increment">Increment</button>
      </div>
      <div>
        {{ count }}
        <button @click="count++">Increment</button>
      </div>
      <div>
        {{ store.fullname }}
        <button @click="store.$reset()">reset</button>
      </div>
    </div>
  </main>
</template>
