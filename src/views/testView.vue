<template>
  <div>hello</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

console.log(router)
console.log(route)
</script>

<style lang="scss" scoped></style>
