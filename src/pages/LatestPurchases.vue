<template>
  <div class="containert">
      <p>{{ customer.firstName }}</p>
      <p>{{ customer.lastName }}</p>
      <p>{{ customer.email }}</p>
      <ul>
          <li v-for="product in customer.products" :key="product.id">
              {{ product.title }}
              </li>
      </ul>
      <router-link class="btn btn-link" to='/customers'>Back to customers</router-link>
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService'
export default {
    created(){
        this.customer = customerService.get(this.$route.params.id)
    }
}
</script>

<style>

</style>
