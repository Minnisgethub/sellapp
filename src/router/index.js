import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Index', component: Index, children:
      [{ path: '/Goods', name: 'Goods', component: () => import('../views/Goods.vue') },
      { path: '/Evaluate', name: 'Evaluate', component: () => import('../views/Evaluate.vue') },
      { path: '/Merchant', name: 'Merchant', component: () => import('../views/Merchant.vue') }]
  },
]

const router = new VueRouter({
  routes
})

export default router
