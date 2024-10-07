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
    <button @click="goTo">go back</button>
  </section>
</template>

<script setup>
import sourceData from '@/assets/data.json'

import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const destinationId = computed(() => {
  return parseInt(route.params.id)
})

const destination = computed(() => {
  return sourceData.destinations.find((destination) => destination.id === destinationId.value)
})

function goTo() {
  // router.push({ name: 'home' })
  router.go(-1)
}

onBeforeRouteUpdate((from, to) => {
  console.log(from, to)
})
</script>

<style lang="css" scoped></style>
