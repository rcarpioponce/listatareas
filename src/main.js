import Vue from 'vue'
import App from './App.vue'

export let bus = new Vue(); 

new Vue({
  el: '#app',
  render: h => h(App)
})
