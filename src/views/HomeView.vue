<script setup lang="ts">
import sourceData from '../assets/data.json'

const destinations = sourceData.destinations
</script>

<template>
  <main class="home">
    <h1>destination</h1>
    <div class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destination.view', params: { id: destination.id, slug: destination.slug } }"
      >
        <h2>
          {{ destination.name }}
        </h2>
        <img :src="`/images/${destination.image}`" />
      </RouterLink>
    </div>
  </main>
</template>
