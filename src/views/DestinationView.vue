<template>
  <div>
    <section class="destinations">
      <h1>
        {{ destination.name }}
      </h1>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" />
        <p>
          {{ destination.description }}
        </p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <div v-for="experience in destination.experiences" :key="experience.name">
          <ExperienceCard :experience="experience" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed, reactive, ref, watch, onBeforeMount } from 'vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/GoBack.vue'

const route = useRoute()

let destination = ref({})

onBeforeMount(() => {
  fetchData()
})

async function fetchData() {
  try {
    const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`)
    destination.value = await response.json()
  } catch (err) {
    console.log(err)
  }
}
</script>

<style lang="css" scoped></style>
