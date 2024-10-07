import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCardStore = defineStore('cardStore', () => {
  // STATE
  const card = ref([])

  const totalItemInCards = computed(() => {
    return card.value
      .map((item) => item.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  })

  const totalPriceInCards = computed(() => {
    let count = 0
    card.value.forEach((item) => {
      count += item.quantity * item.price
    })
    return count
  })

  const addToCard = (item) => {
    console.log(item)
    card.value.push(item)
  }

  function increase(id) {
    card.value.find((i) => i.id == id).quantity++
  }
  function decrease(id) {
    card.value.find((i) => i.id == id).quantity--
  }

  return { addToCard, card, totalItemInCards, totalPriceInCards, increase, decrease }
})
