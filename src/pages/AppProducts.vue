<template>
  <div>
     <h1>Products</h1>
    <hr>
    <div class="container">
      <input  type='text' class='form-control' v-model='searchTerm' placeholder="search">
    <div class="list-group">
      <div class="list-group-item" v-for='product in filteredProducts' :key="product.id">
        {{ product.title }} <br> In stock: {{ product.quantity }}
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import  { productService } from '../services/ProductService'

export default {
  data(){
    return{
      products: productService.list(),
      searchTerm: ''
    }
  },
  computed:{
    filteredProducts(){
      return this.products.filter(product=>{
        return product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    }
  }

}
</script>

<style>

</style>
