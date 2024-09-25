<template>
  <div id="nav">
    <RouterLink id="logo" to="/">Home</RouterLink>
    <RouterLink
      v-for="destination in destinationsSlug"
      :key="destination.id"
      :to="{ name: 'destination.view', params: { id: destination.id, slug: destination.slug } }"
      >{{ destination.name }}
    </RouterLink>
    <RouterLink :to="{ name: 'dashboard', query: { redirect: 'true' } }">Dashboard</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import sourceData from '@/assets/data.json'

const destinationsSlug = computed(() => {
  return sourceData.destinations.map(({ id, slug, name }) => {
    return { id, slug, name }
  })
})
</script>

<style lang="css" scoped>
#nav .custom-link-active-class {
  color: white;
  border-bottom: 2px solid white;
}
</style>
