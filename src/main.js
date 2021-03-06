import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import mainboard from './components/mainboard.vue'
import AddPart from './components/AddPart.vue'
import ListPart from './components/ListPart.vue'

new Vue({
  el: '#app',
  render: h => h(App),

})
