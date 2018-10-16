<template>
  <div class="add container">
    <h1 class="page-header">Add Customer Details</h1>
    <Alert v-if="alert" v-bind:message="alert"/>
    <form v-on:submit="addCustomer">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control"
        id="inputEmail4" placeholder="Email" v-model="customer.email">
      </div>
      <div class="form-group col-md-6">
        <label for="username">Username</label>
        <input type="username" class="form-control"
        id="inputUsername" placeholder="Username" v-model="customer.username">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="phone">Phone Number</label>
        <input type="number" class="form-control"
        id="phoneNo" placeholder="0811922212" v-model="customer.phone">
      </div>
      <div class="form-group col-md-6">
        <label for="website">Website</label>
        <input type="website" class="form-control"
        id="website" placeholder="www.checkthis.com" v-model="customer.website">
      </div>
    </div>
    <div class="form-group">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control"
      id="inputAddress" placeholder="1234 Main St" v-model="customer['address']['suite']">
    </div>
    <div class="form-group">
      <label for="inputAddress2">Address 2</label>
      <input type="text" class="form-control" id="inputAddress2"
      placeholder="Apartment, studio, or floor" v-model="customer['address']['street']">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="inputCity" v-model="customer['address']['city']">
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  import Alert from './Alert'
export default {
  name: 'add',
  data () {
    return {
      customer: {
        address: {
          suite: '',
          street: '',
          city: ''
        }
      },
      alert: ''
    }
  },
  methods: {
    addCustomer(e){
      e.preventDefault();
      if(!this.customer.username || !this.customer.email || !this.customer.phone
        || !this.customer.address.suite || !this.customer.address.street || !this.customer.address.city){
        this.alert = "Please complete all fields"
      } else {
        let newCustomer =  {
            username: this.customer.username,
            email: this.customer.email,
            phone: this.customer.phone,
            website: this.customer.website,
            address: {
              suite: this.customer.address.suite,
              street: this.customer.address.street,
              city: this.customer.address.city
            }
        }

        this.$http.post('http://localhost:4000/customers', newCustomer)
        .then(function(response){
          this.$router.push({ path: "/", query: {alert: 'Customer Added'}})
        });
        e.preventDefault();
      }
      e.preventDefault()
    }
  },
  components: { 
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
