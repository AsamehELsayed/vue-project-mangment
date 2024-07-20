import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleProject from '../views/SingleProject.vue'
import Add from '../views/AddView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/add',
      name:'add',
      component:Add

    },
    {
      path:'/single-project/:id',
      name:'singleProject',
      component:SingleProject,
      props: true
    }
  ]
})

export default router
