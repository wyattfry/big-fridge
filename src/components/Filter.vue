<template>
  <div class="py-3">
    <h3>Filter</h3>
    <form>
      <div class="form-inline">
        <div class="row col-12">
          <input class="form-control col-md-3 col-sm-6 mb-2 mr-2" type="text" placeholder="Name" v-on:input="$emit('filter', 0, $event.target.value)">
          <input class="form-control col-md-3 col-sm-6 mb-2 mr-2" type="text" placeholder="Type" v-on:input="$emit('filter', 1, $event.target.value)">
          <input class="form-control col-md-3 col-sm-6 mb-2 mr-2" type="text" placeholder="Store" v-on:input="$emit('filter', 2, $event.target.value)">
        </div>
        <div class="row col-12">
          <datepicker name="purchaseDate" wrapper-class="mb-2 mr-2" format="M/d/yyyy" input-class="form-control" placeholder="Purchase Date" :bootstrap-styling="true" :typeable="true" @input="(d) => d != null ? $emit('filter', 3, d.toLocaleDateString()) : ''" @cleared="$emit('filter',3,'')"/>
          <datepicker name="expireDate" wrapper-class="mb-2 mr-2" format="M/d/yyyy" input-class="form-control" placeholder="Expiration Date" :bootstrap-styling="true" :typeable="true" @input="(d) => d != null ? $emit('filter', 4, d.toLocaleDateString()) : ''" @cleared="$emit('filter',4,'')"/>
        </div>
        <div class="row col-12">
          <input class="form-control col-md-3 col-sm-6 mb-2 mr-2" type="text" placeholder="Max Quantity" v-on:input="$emit('filter', 5, $event.target.value)">
          <input class="form-control col-md-3 col-sm-6 mb-2 mr-2" type="text" placeholder="Min Quantity" v-on:input="$emit('filter', 6, $event.target.value)">
        </div>
        <button type="button" v-on:click="$emit('filter-button')" class="btn btn-primary">Filter</button>
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'foodFilter',
  components: {
    Datepicker
  },
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
