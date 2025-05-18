import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Education from '../views/Education.vue'
import Skills from '../views/Skills.vue'
import Blog from '../views/Blog.vue'
import NotFound from '../views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/education', component: Education },
  { path: '/skills', component: Skills },
  { path: '/blog', component: Blog },
  { path: '/:pathMatch(.*)*',component: NotFound}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
