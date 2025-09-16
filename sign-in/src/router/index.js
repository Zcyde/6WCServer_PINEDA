import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import StudentSignIn from '../pages/student.vue'
import AdminSignIn from '../pages/admin.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/student', component: StudentSignIn },
  { path: '/admin', component: AdminSignIn },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router