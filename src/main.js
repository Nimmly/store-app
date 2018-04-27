import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppCustomers from './pages/AppCustomers.vue'
import AppProducts from './pages/AppProducts.vue'
import LatestPurchases from './pages/LatestPurchases.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/customers'},
  { path: '/customers', component: AppCustomers },
  { path: '/products', component: AppProducts },
  { path: '/customers/:id', component: LatestPurchases }
]
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
