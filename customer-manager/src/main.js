// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import ModifyCustomer from './components/ModifyCustomer'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Customers},
    {path: '/about', component: About},
    {path: '/add', component: Add},
    {path: '/customer/:id', component: CustomerDetails},
    {path: '/edit/:id', component: ModifyCustomer}
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div id="navbar">
          <span <router-link to="/">Home</router-link></span>
          <span <router-link to="/about">About</router-link></span>
        </div>
        <div id="navbar navbar-right">
        <span <router-link to="/add">Add Customer</router-link></span>
      </div>
        </div><!--/.nav-collapse -->
    </nav>
      <router-view></router-view>
    </div>
  `
}).$mount("#app")
