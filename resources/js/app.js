/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './components/Index.vue'
import Create from './components/Create.vue'
import Read from './components/Read.vue'
import Update from './components/Update.vue'

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const routes = [
    { path: '/', component: Index },
    { path: '/create', component: Create },
    { path: '/read/:id', component: Read, name:'readList'},
    { path: '/:id/edit', component: Update, name:'editList'}
]

const router = new VueRouter({
    routes
  })

const app = new Vue({
    router
  }).$mount('#app')

// const app = new Vue({
//     el: '#app',
// });
