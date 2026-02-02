import { createRouter, createWebHistory } from 'vue-router'
import ProductCertificate from '../views/ProductCertificate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/thirdExt/print/ProductCertificate',
      name: 'ProductCertificate',
      component: () => import('../views/ProductCertificate.vue')
    },
    {
      path: '/thirdExt/print/ElectronicCertificate',
      name: 'ElectronicCertificate',
      component: () => import('../views/ElectronicCertificate.vue')
    }
  ]
})

export default router
    