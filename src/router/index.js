import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleProject from '../views/SingleProject.vue'
import EditForm from '../views/EditForm.vue'
import Add from '../views/AddView.vue'
import CreateForm from '../views/CreateForm.vue'
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
    },
    {
      path:'/edit/:id',
      name:'edit',
      component:EditForm,
      props: true

    },  {
      path:'/create',
      name:'create',
      component:CreateForm,
      props: true

    }
  ]
})

export default router
