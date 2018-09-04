<template>
  <div class="col-10 my-5 mx-auto" id="app">
    <h1>Big Fridge</h1>
    <p>This is Wyatt Fry's submission for the coding challenge <a href="https://github.com/annikahagelin/big-fridge">annikahagelin/big-fridge</a>.</p>
    <FoodFilter
      v-on:filter="onFilterTerm"
      v-on:filter-button="onFilterButton"
    />
    <FoodList
      title="Quantity of food by date purchased, bucketed by food name"
      columns="100101"
      :foods="objToArray(filteredData.reduce(reducer, {})).sort((a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate))"
    />
    <FoodList
      title="Food purchased after expiration date"
      columns="111111"
      :foods="filteredData.filter(item => Date.parse(item.purchaseDate) > Date.parse(item.expirationDate))"
    />
    <FoodList
      title="List of food items with associated properties"
      columns="111111"
      :foods="filteredData"
      />
  </div>
</template>

<script>
import FoodList from "./components/FoodList.vue";
import FoodFilter from "./components/Filter.vue";

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


let stores = [];
const stuff = d0.concat(d1,d2,d3,d4,d5,d6,d7,d8,d9);
for (let i = 0; i < stuff.length; i += 1) {
  if (stores.indexOf(stuff[i].store) >= 0) {
    stores.push(stuff[i].store);
  }
}

const data = {
  unfilteredData: stuff,
  filteredData: stuff,
  filters: ["", "", "", "", "", "", ""],
  types: [],
  stores: stores
};

function formatDate(dateString) {
  return new Date(Date.parse(dateString)).toLocaleDateString();
}

const reducer = (accumulator, currentItem) => {
    let date = currentItem.purchaseDate.substring(0,10);
    if (accumulator.hasOwnProperty(date)) {
        if (accumulator[date].hasOwnProperty(currentItem.name)) {
            accumulator[date][currentItem.name] += currentItem.quantity;    
        } else {
            accumulator[date][currentItem.name] = currentItem.quantity;
        }
    } else {
        accumulator[date] = {[currentItem.name]: currentItem.quantity};
    }
    return accumulator;
};

function objToArray (obj) {
  let converted = [];
  for (let key in obj) {
      for (let innerkey in obj[key]) {
          let item = {
              "name": innerkey,
              "type": "",
              "store": "",
              "purchaseDate": key,
              "expirationDate": "",
              "quantity": obj[key][innerkey]
          }
          converted.push(item);
      }
  }
  return converted;
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
    FoodFilter,
    FoodList,
  },
  methods: {
    onFilterTerm: (property, term) => {
      data.filters[property] = term;
    },
    onFilterButton: filterData,
    reducer: reducer,
    objToArray: objToArray
  }
}
</script>

<style>
</style>
