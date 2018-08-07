import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
