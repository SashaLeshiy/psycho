import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import DiagView from '../views/DiagView'
import CorrView from '../views/CorrView'
import ContactsView from '../views/ContactsView'
import Error404View from '../views/Error404View'

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
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404View',
    component: Error404View,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
