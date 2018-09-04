import Vue from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.slim.js';
import '../node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import '../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
