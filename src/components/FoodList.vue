<template>
<div class="m-3 p-3">
  <h3>{{ title }}</h3>
  <table class="table">
    <tbody>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Store</th>
        <th>Purchase Date</th>
        <th>Expiration Date</th>
        <th>Quantity</th>
      </tr>
      <tr v-for="item in foods.slice((pageNumber - 1) * 10,pageNumber * 10)" v-bind:key="item.name + '_' + item.purchaseDate">
        <td>{{ item.name }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.store }}</td>
        <td>{{ new Date(Date.parse(item.purchaseDate)).toLocaleDateString() }}</td>
        <td>{{ new Date(Date.parse(item.expirationDate)).toLocaleDateString() }}</td>
        <td>{{ item.quantity }}</td>
      </tr>
    </tbody>
  </table>
  <span>Page </span><input v-model="pageNumber" type="text"><span> of {{ pageCount }}</span>
</div>
</template>

<script>
export default {
  name: 'FoodList',
  props: {
    title: String,
    foods: Array,
    pageNumber: Number,
    pageCount: Number
  }
}
</script>
