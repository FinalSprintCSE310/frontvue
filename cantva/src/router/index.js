import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '@/views/loginView.vue';

import TeachDash from '@/views/TeachDash.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component:AboutView,
    },
    {
      path:'/login',
      name:'login',
      component:LoginView,
    },
    {
      path: '/teachdash',
      name: 'teachdash',
      component: TeachDash,
    },
  ],
})
export default router;