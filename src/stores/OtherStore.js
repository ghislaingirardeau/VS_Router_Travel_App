import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOtherStore = defineStore('other', () => {
  // STATE
  const lastname = ref('Apple')

  return { lastname }
})
