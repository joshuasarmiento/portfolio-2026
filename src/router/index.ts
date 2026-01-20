import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/project/:id', name: 'detail', component: ProjectDetail, props: true }
  ],
  scrollBehavior() { return { top: 0, behavior: 'smooth' } }
})

export default router
