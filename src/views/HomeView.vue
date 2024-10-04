<script setup>
import sourceData from '../assets/data.json'
import { useProductStore } from '@/stores/ProductsStore.js'
import { useCardStore } from '@/stores/CardStore.js'

import { ref } from 'vue'
import AppInput from '@/components/AppInput.vue'

const store = useProductStore()
const cardStore = useCardStore()

store.fill()

// const destinations = sourceData.destinations

const addToCard = (destination) => {
  const { id, price, quantity, name } = destination
  cardStore.addToCard({ id, price, quantity, name })
}
</script>

<template>
  <main class="home">
    <h1>destination</h1>
    <div v-if="store.datas" class="destinations">
      <div v-for="destination in store.datas.destinations" :key="destination.id">
        <RouterLink
          :to="{
            name: 'destination.view',
            params: { id: destination.id, slug: destination.slug }
          }"
        >
          <h2>
            {{ destination.name }}
          </h2>
          <img :src="`/images/${destination.image}`" />
        </RouterLink>
        <div>
          <p>Price: {{ destination.price }}€</p>
        </div>
        <!-- le probleme ici est que quantity va s'appliquer partout, il faut donc faire un component dédié pour avoir une quantité par destination -->
        <!-- <div>
          <input type="number" name="quantity" id="quantity" v-model="quantity" />
          <button @click="addToCard(destination)">Add Travel</button>
        </div> -->
        <AppInput :destination="destination" />
      </div>
    </div>
  </main>
</template>
