import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Student from '../views/Student.vue';
import Test from '../views/Test.vue';
import Grades from '../views/Grades.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';



const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/student',
    name: 'Student',
    component: Student,
  },

  {
    path: '/test',
    name: 'Test',
    component: Test,
  },

  {
    path: '/grades',
    name: 'Grades',
    component: Grades,
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
 
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
