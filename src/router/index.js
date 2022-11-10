import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import DiagView from '../views/DiagView'
import CorrView from '../views/CorrView'
import ContactsView from '../views/ContactsView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/diagnostics',
    name: 'diagnostics',
    component: DiagView
  },
  {
    path: '/correction',
    name: 'correction',
    component: CorrView,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
