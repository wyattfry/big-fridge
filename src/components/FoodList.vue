<template>
<div class="py-5">
  <h3>{{ title }}</h3>
  <span>Total: {{ foods.length.toLocaleString() }} item(s)</span>
  <table class="table">
    <tbody>
      <tr>
        <th v-if="columns[0] == 1">Name</th>
        <th v-if="columns[1] == 1">Type</th>
        <th v-if="columns[2] == 1">Store</th>
        <th v-if="columns[3] == 1">Purchase Date</th>
        <th v-if="columns[4] == 1">Expiration Date</th>
        <th v-if="columns[5] == 1">Quantity</th>
      </tr>
      <tr v-for="item in foods.slice((pageNumber - 1) * 10,pageNumber * 10)" v-bind:key="item.name + '_' + item.purchaseDate">
        <td v-if="columns[0] == 1">{{ item.name }}</td>
        <td v-if="columns[1] == 1">{{ item.type }}</td>
        <td v-if="columns[2] == 1">{{ item.store }}</td>
        <td v-if="columns[3] == 1">{{ new Date(Date.parse(item.purchaseDate)).toLocaleDateString() }}</td>
        <td v-if="columns[4] == 1">{{ new Date(Date.parse(item.expirationDate)).toLocaleDateString() }}</td>
        <td v-if="columns[5] == 1">{{ item.quantity }}</td>
      </tr>
    </tbody>
  </table>
  <span>Page </span><input style="width:60px" v-model="pageNumber" value="1" type="text">
  <span> of {{ Math.ceil(foods.length / 10).toLocaleString() }}</span>
</div>
</template>

<script>
export default {
  name: 'FoodList',
  props: {
    title: String,
    foods: Array,
    columns: String
  },
  data: () => ({
    pageNumber: 1
  })
}
</script>
