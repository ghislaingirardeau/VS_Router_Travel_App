import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  // STATE
  const lastname = ref('Apple')

  return { lastname }
})
