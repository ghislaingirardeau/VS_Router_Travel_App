<template>
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
      <RouterLink
        v-for="experience in destination.experiences"
        :key="experience.name"
        :to="{
          name: 'experience.view',
          params: { id: destination.id, slug: destination.slug, experienceSlug: experience.slug }
        }"
      >
        <ExperienceCard :experience="experience" />
      </RouterLink>
    </div>
    <!-- we dont want to navigate to a new page but instead to go to a nested route -->
    <!-- in the router, we will add a children to this route -->
    <RouterView />
  </section>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed, reactive, ref, watch, onBeforeMount, useModel } from 'vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/GoBack.vue'

const route = useRoute()

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  hasNewsletterPopup: {
    type: Boolean
  }
})

let destination = ref({})

// 2 options to fetch inside dynamic route

// USING WATCH: but better use when only few routes or limited pages (otherwise, watch a big data)
// watch(() => route.params.id, fetchData, { immediate: true })

// USING KEY TAG & LIFECYCLE HOOK
// KEY inside router-view component (parent): but re-built all component
// BETTER APPROACH
// key destroy component and re-built it when ever it change
onBeforeMount(() => {
  fetchData()
})

async function fetchData() {
  try {
    const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`)
    destination.value = await response.json()
    console.log(destination.value)
  } catch (err) {
    console.log(err)
  }
}
</script>

<style lang="css" scoped></style>
