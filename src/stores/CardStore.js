import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCardStore = defineStore('cardStore', () => {
  // STATE
  const card = ref([])

  const addToCard = (item) => {
    card.value.push(item)
  }

  return { addToCard, card }
})
