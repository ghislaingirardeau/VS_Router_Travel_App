<template>
  <a v-if="isExternal" :href="to" target="_blank"><slot /></a>
  <RouterLink v-else :to="to"><slot /></RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

// ROUTER LINK DOES NOT SUPPORT EXTERNAL LINK
// Probleme: si on recoit des données d'une api qui a un mixte de lien interne et externe, il faudra adapter le tag en fonction...
// Solution: CREATE A COMPONENT USED FOR EVERY LINK EXTERNAL OR INTERNAL DEPENDING ON TO PROPS RECEIVED
// create a component to display <a></a> link for external or routerlink for internal navigation

// en important routerLink, on a accès au props passer dans celui-ci à chaque fois qu'il sera appelé
// ce component aura de toute facon comme seul props TO
const props = defineProps({
  ...RouterLink.props
})

const isExternal = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<style lang="scss" scoped></style>
