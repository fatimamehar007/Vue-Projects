import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Destinations from '../pages/Destinations.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/destinations', component: Destinations },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
