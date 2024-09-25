<template>
  <div id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink
      v-for="destination in destinationsSlug"
      :key="destination.id"
      :to="`/destination/${destination.id}`"
      >{{ destination.name }}
    </RouterLink>
    <RouterLink to="brazil">Brazil</RouterLink>
    <RouterLink to="panama">Panama</RouterLink>
    <RouterLink to="hawaii">Hawaii</RouterLink>
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
  color: red;
  border-bottom: 2px solid red;
}
</style>
