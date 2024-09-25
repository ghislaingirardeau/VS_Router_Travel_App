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
import { onBeforeRouteUpdate, RouterLink, useRoute, useRouter } from 'vue-router'
import { computed, reactive, ref, watch, onBeforeMount } from 'vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/GoBack.vue'

const route = useRoute()
const router = useRouter()

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

onBeforeMount(() => {
  fetchData()
})

async function fetchData() {
  try {
    const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`)
    destination.value = await response.json()
  } catch (err) {
    console.log(err)
    // To allowed keeping the url while rendering a different page !!
    router.push({
      name: 'Error',
      params: { pathMatch: route.path.split('/').splice(1) },
      query: route.query,
      hash: route.hash
    })
  }
}
</script>

<style lang="css" scoped></style>
