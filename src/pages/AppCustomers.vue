<template>
  <div>
     <h1>Customers</h1>
    <hr>
    <div class="container">
    <div class="list-group">
      <div class="list-group-item" v-for='customer in customers' :key="customer.id">
        {{ customer.firstName }} {{ customer.lastName }}<router-link class="nav-link" :to="'/customers/' + customer.id">Latest Purchases</router-link>
        <button class="btn btn-danger" @click="removeCustomer(customer)">Remove Customer</button>
      </div>
      <hr>

      <form @submit.prevent="addCustomer">
      <label>First Name</label>
      <input v-model="newCustomer.firstName" type='text' placeholder="first"/>
      <label>Last Name</label>
      <input v-model="newCustomer.lastName" type='text' placeholder="last"/>
      <label>Email</label>
      <input v-model="newCustomer.email" type="text" placeholder="email"/>
      <button class="btn btn-success" type='submit'>Add Customer</button>
    </form>
      </div>
    </div>
  </div>
</template>

<script>
import  { customerService } from '../services/CustomerService'

export default {
  data(){
    return {
      customers: customerService.list(),
    
    newCustomer: {
      firstName:'',
      lastName: '',
      email:''
    }
    
  }},
  methods:{
    removeCustomer(customer){
      customerService.delete(customer)
    },
    addCustomer(newCustomer){
      customerService.newCustomer(this.newCustomer)
    }
  }
}
</script>

<style>

</style>
