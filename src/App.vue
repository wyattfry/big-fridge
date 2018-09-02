<template>
  <div id="app">
    <FoodFilter
      v-on:filter="onFilterTerm"
      v-on:filter-type="onFilterTerm"
      v-on:filter-store="onFilterTerm"
      v-on:filter-purchase="onFilterTerm"
      v-on:filter-expire="onFilterTerm"
      v-on:filter-max-quantity="onFilterTerm"
      v-on:filter-min-quantity="onFilterTerm"
      v-on:filter-button="onFilterButton"
    />
    <FoodListByPurchaseDate
      title="Quantity of food by date purchased, bucketed by food name"
      :foods="filteredData.slice().sort((a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate))"
      pageNumber=1
      :pageCount="Number.parseInt(filteredData.length / 10).toLocaleString()"
    />
    <FoodList
      title="List of food items with associated properties"
      :foods="filteredData.slice(0,11)"
      pageNumber=1
      :pageCount="Number.parseInt(filteredData.length / 10).toLocaleString()"
      />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import FoodListByPurchaseDate from "./components/FoodListByPurchaseDate";
import FoodList from "./components/FoodList.vue";
import FoodFilter from "./components/Filter.vue";

// var stuff = [1,2,3];
import d0 from "./assets/data-0.json";
import d1 from "./assets/data-1.json";
import d2 from "./assets/data-2.json";
import d3 from "./assets/data-3.json";
import d4 from "./assets/data-4.json";
import d5 from "./assets/data-5.json";
import d6 from "./assets/data-6.json";
import d7 from "./assets/data-7.json";
import d8 from "./assets/data-8.json";
import d9 from "./assets/data-9.json";

var stuff = d0.concat(d1,d2,d3,d4,d5,d6,d7,d8,d9);

const data = {
  unfilteredData: stuff,
  filteredData: stuff,
  filters: ["", "", "", "", "", "", ""]
};

function formatDate(dateString) {
  return new Date(Date.parse(dateString)).toLocaleDateString();
}

const filterFunctions = [
  item => item.name.toLowerCase().includes(data.filters[0].toLowerCase()),
  item => item.type.toLowerCase().includes(data.filters[1].toLowerCase()),
  item => item.store.toLowerCase().includes(data.filters[2].toLowerCase()),
  item => formatDate(item.purchaseDate) == formatDate(data.filters[3]),
  item => formatDate(item.expirationDate) == formatDate(data.filters[4]),
  item => item.quantity <= Number.parseInt(data.filters[5]),
  item => item.quantity >= Number.parseInt(data.filters[6])
];

function filterData() {
  data.filteredData = data.unfilteredData.slice();
  for (let i = 0; i < data.filters.length; i += 1) {
    if (data.filters[i].length > 0) {
      this.filteredData = this.filteredData.filter(filterFunctions[i])
    }
  }
}

export default {
  name: "app",
  data: () => data,
  components: {
    HelloWorld,
    FoodFilter,
    FoodListByPurchaseDate,
    FoodList
  },
  methods: {
    onFilterTerm: (property, term) => {
      data.filters[property] = term;
    },
    onFilterButton: filterData
    }
  }
</script>

<style>
</style>
