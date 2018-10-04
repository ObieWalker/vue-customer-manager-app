// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Customers},
    {path: '/about', component: About}
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <router-link to="/about">About</router-link>
      <router-view></router-view>
    </div>
  `
}).$mount("#app")
