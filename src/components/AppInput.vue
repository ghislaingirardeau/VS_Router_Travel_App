<script setup>
import { useCardStore } from '@/stores/CardStore.js'
import { ref } from 'vue'

const cardStore = useCardStore()

const props = defineProps({
  destination: Object
})

const quantity = ref(0)

const addToCard = () => {
  const { id } = props.destination
  console.log(id)
  cardStore.addToCard({ id, quantity })
}
</script>
<template>
  <div>
    <input type="number" name="quantity" id="quantity" v-model="quantity" />
    <button @click="addToCard(destination)">Add Travel</button>
  </div>
</template>
