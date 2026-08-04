import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/Layouts/DefaultLayout.vue'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Projects from '@/pages/Projects.vue'
import Resume from '@/pages/Experience.vue'
import Contact from '@/pages/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', component: Home },
        { path: 'projects', component: Projects },
        { path: 'experience', component: Resume },
        { path: 'about', component: About },
        { path: 'contact', component: Contact },
      ]
    }
  ]
})

export default router