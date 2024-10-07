<template>
  <div>
    <h1>Votre panier</h1>
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cardStore.card" :key="item.id">
          <th scope="row">{{ item.name }}</th>
          <td class="row_quantity">
            <button @click="cardStore.decrease(item.id)">-</button>

            {{ item.quantity }}
            <button @click="cardStore.increase(item.id)">+</button>
          </td>
          <td class="row_price">{{ item.price }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="2">Total</th>
          <td>{{ cardStore.totalPriceInCards }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { useCardStore } from '@/stores/CardStore.js'
const cardStore = useCardStore()
</script>

<style lang="css" scoped>
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  width: 80%;
}

thead,
tfoot {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td:last-of-type {
  text-align: center;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}
.row_price {
  width: 80px;
}
.row_quantity {
  width: 160px;
}
</style>
