<template>
  <div class="p-3">
    <h3>Filter</h3>
    <input type="text" placeholder="Name" v-on:input="$emit('filter', 0, $event.target.value)">
    <input type="text" placeholder="Type" v-on:input="$emit('filter', 1, $event.target.value)">
    <input type="text" placeholder="Store" v-on:input="$emit('filter', 2, $event.target.value)">
    <input type="text" placeholder="Purchase Date" v-on:input="$emit('filter', 3, $event.target.value)">
    <input type="text" placeholder="Expiration Date" v-on:input="$emit('filter', 4, $event.target.value)">
    <input type="text" placeholder="Max Quantity" v-on:input="$emit('filter', 5, $event.target.value)">
    <input type="text" placeholder="Min Quantity" v-on:input="$emit('filter', 6, $event.target.value)">
    <button v-on:click="$emit('filter-button')" class="button">Filter</button>
  </div>
</template>

<script>
export default {
  name: 'filer',
  props: {
    name: String,
    type: String,
    store: String,
    purchaseDate: Date,
    expirationDate: Date,
    minQuantity: Number,
    maxQuantity: Number
  }
}
</script>
