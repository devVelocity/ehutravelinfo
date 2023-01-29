import { createRouter, createWebHashHistory } from 'vue-router'
import HomePg from '../views/HomePg.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePg
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
