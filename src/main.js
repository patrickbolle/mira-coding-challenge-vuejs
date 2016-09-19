import Vue from 'vue';
import Resource from 'vue-resource';
import App from './App.vue';

// Vue Conifg
Vue.use(Resource);

new Vue({
  el: '#app',
  render: h => h(App)
});
