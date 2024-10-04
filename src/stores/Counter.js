import { defineStore } from 'pinia'
// export const useCounterStore = defineStore('counter', {
//   state: () => ({ count: 0, name: 'Eduardo' }),
//   getters: {
//     doubleCount: (state) => state.count * 2
//   },
//   actions: {
//     increment() {
//       this.count++
//     }
//   }
// })

import { ref, computed } from 'vue'

import { useOtherStore } from './OtherStore'

export const useCounterStore = defineStore('counter', () => {
  // STATE
  const count = ref(0)
  const name = ref('Eduardo')
  const auth = useOtherStore()
  // GETTER
  const doubleCount = computed(() => count.value * 2)
  console.log(auth)
  const fullname = computed(() => name.value + ' ' + auth.lastname)
  // ACTION
  function increment() {
    count.value++
  }
  function $reset() {
    count.value = 0
  }

  return { count, name, fullname, doubleCount, increment, $reset }
})
