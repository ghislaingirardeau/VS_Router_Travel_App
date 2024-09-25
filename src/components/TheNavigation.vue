<template>
  <div id="nav">
    <AppLink id="logo" to="/">Home</AppLink>
    <AppLink
      v-for="destination in destinationsSlug"
      :key="destination.id"
      :to="{ name: 'destination.view', params: { id: destination.id, slug: destination.slug } }"
      >{{ destination.name }}
    </AppLink>
    <AppLink :to="{ name: 'dashboard', query: { redirect: 'true' } }">Dashboard</AppLink>
    <AppLink to="https://vueschool.io/">Vue school</AppLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import sourceData from '@/assets/data.json'
import AppLink from './AppLink.vue'

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
