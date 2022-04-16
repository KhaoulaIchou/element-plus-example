//import Vue from 'vue'
//import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Statistic from './views/Statistic.vue'

//Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },  
  {
    path: '/statistic',
    name: 'statistic',
    component: Statistic
  }
]

const router = createRouter({
    history: createWebHistory(),
        routes
})
  
export default router