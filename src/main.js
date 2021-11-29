
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
const baseURL = 'http://162.14.121.63:6363/'
Vue.prototype.api= baseURL
Vue.prototype.$ajax= axios
 
Vue.config.productionTip = false
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})