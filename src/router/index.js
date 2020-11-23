import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mail from '../views/Mail.vue'
import Recv from '../views/RecvMail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mail/:id',
    name: 'Mail',
    component: Mail
  },
  {
    path: '/recv/',
    name: 'Recv',
    component: Recv
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
