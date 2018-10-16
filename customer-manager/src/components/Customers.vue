<template>
  <div class="customers">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Manage Customers</h1>
    <input class="form-control" placeholder="Enter Customer Username" v-model="filterInput" />
    <br />
    <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Website</th>
        <th scope="col">Address</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer in filterBy(customers, filterInput)">
        <th scope="row">{{customer.id}}</th>
        <td>{{customer.username}}</td>
        <td>{{customer.email}}</td>
        <td>{{customer.phone}}</td>
        <td>{{customer.website}}</td>
        <td>{{customer.address.suite}},
          {{customer.address.street}},
          {{customer.address.city}}.</td>
        <td><router-link :to="'/customer/'+customer.id"><button class="btn btn-default">View Details</button></router-link></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import Alert from './Alert';
export default {
  name: 'customers',
  data () {
    return {
      customers: [
        {
        address: {
          suite: '',
          street: '',
          city: ''
        }
      }
      ],
      alert: '',
      filterInput: ''
    }
  },
  methods: {
    fetchCustomers(){
      this.$http.get('http://localhost:4000/customers')
      .then(function(response){
        this.customers = response.body
      })
    },
    filterBy(list, value){
      return list.filter(function(customer){
        if (value && customer.username.toLowerCase()
          .indexOf(value.toLowerCase()) == -1){
          return
        }
        return customer.username
      })
    }
  },
  created: function(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert
    }
    this.fetchCustomers()
  },
  components: { 
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
