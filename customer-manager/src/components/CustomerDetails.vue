<template>
  <div class="details container">
    <h1 class="page-header">Customer Details</h1>
      <span class="pull-right"><button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">Delete</button></span>
      <span class="pull-right"><button class="btn btn-primary" v-on:click="modifyCustomer(customer.id)">Modify Customer</button></span>
    <h5>Name: {{customer.name}}</h5>
    <h5>Username: {{customer.username}}</h5>
    <h5>Email: {{customer.email}}</h5>
    <h5>Address: {{customer.address.suite}}, {{customer.address.street}}, {{customer.address.city}}.
     {{customer.address.zipcode}}</h5>
    <h5>Phone No.: {{customer.phone}}</h5>
    <h5>Website: {{customer.website}}</h5>
    <h5>Company Name: {{customer.company.name}}</h5>
    <h5>Company Description: {{customer.company.catchPhrase}} i.e. {{customer.company.bs}}</h5>
  </div>
</template>

<script>
export default {
  name: 'customerdetails',
  data () {
    return {
      customer: {
        address: {},
        company: {}
      }
    }
  },
  methods: {
      fetchCustomer(id){
      this.$http.get(`http://localhost:4000/customers/${id}`)
      .then(function(response){
        this.customer = response.body
      })
    },
    deleteCustomer(id){
      this.$http.delete(`http://localhost:4000/customers/${id}`)
      .then(function(response){
         this.$router.push({ path: "/", query: {alert: 'Customer Deleted'}})
      })
    },
    modifyCustomer(id){
      this.$router.push({ path: `/edit/${id}`})
    }
  },
  created: function(){
    const id = this.$route.params.id
    this.fetchCustomer(id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
