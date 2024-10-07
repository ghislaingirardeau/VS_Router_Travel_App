import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  // STATE
  const datas = ref(null)

  const fill = async () => {
    datas.value = (await import('@/assets/data.json')).default
  }

  return { datas, fill }
})
