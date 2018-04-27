<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import AppCustomers from './pages/AppCustomers.vue'
import AppProducts from './pages/AppProducts.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    AppCustomers,
    AppProducts,
    NavBar
  }
}
</script>

