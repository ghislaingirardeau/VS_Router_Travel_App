<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" />

    <p>{{ experience.description }}</p>
  </section>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps({
  experienceSlug: {
    type: String,
    required: true
  }
})

const route = useRoute()

let experience = ref({})

onBeforeMount(() => {
  fetchData()
})

async function fetchData() {
  try {
    const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.name}.json`)
    const data = await response.json()
    experience.value = data.experiences.find((e) => e.slug === props.experienceSlug)
    console.log(experience)
  } catch (err) {
    console.log(err)
  }
}
</script>

<style lang="scss" scoped></style>
