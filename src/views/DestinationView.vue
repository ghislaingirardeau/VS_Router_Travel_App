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

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, reactive, ref, watch, onBeforeMount, useModel } from 'vue'

const route = useRoute()

const props = defineProps({
  id: {
    type: Number,
    require: true
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
