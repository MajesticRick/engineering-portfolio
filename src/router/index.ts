import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
// import Projects from '@/pages/Projects.vue'
// import Resume from '@/pages/Resume.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    // { path: '/projects', component: Projects },
    // { path: '/resume', component: Resume },
    { path: '/about', component: About },
  ]
})

export default router