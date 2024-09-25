<template>
  <section class="destinations">
    <h1>
      {{ destination.name }}
    </h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" />
      <p>
        {{ destination.description }}
      </p>
    </div>
  </section>
</template>

<script setup>
import sourceData from '@/assets/data.json'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const destinationId = computed(() => {
  return parseInt(route.params.id)
})

const destination = computed(() => {
  return sourceData.destinations.find((destination) => destination.id === destinationId.value)
})
</script>

<style lang="css" scoped></style>
