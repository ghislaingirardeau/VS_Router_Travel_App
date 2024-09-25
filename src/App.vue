<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'

const route = useRoute()
</script>

<template>
  <TheNavigation />
  <div class="container">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </div>
</template>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
