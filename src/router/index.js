import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const loadComponent = (view) => {
  return () => import(`../views/${view}.vue`);
}


const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'Payrolls',
    component: loadComponent("Payrolls")
  },
  {
    path: '/:catchAll(.*)',
    name: 'error404',
    component: loadComponent('Error404')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
