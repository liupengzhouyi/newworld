import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../components/login/Login"
import SaySome from '../views/SaySome'
import SelectLogin from '../views/login/selectLogin'
import StudentLogin from '../views/login/studentLogin/studentLogin'
import SelectRegister from '../views/register/selectRegister'
import AddFile from "../components/AddFile";
import StudentRegister from '../views/register/studentRegister/studentRegister'
import StudentRegisterOver from '../views/register/studentRegister/studentRegisterOver'
import TeacherRegister from '../views/register/teacherRegister/teacherRegister'
import TeacherRegisterOver from "../views/register/teacherRegister/TeacherRegisterOver";
import ConservatorRegister from "../views/register/conservatorRegister/conservatorRegister";
import ConservatorRegisterOver from "../views/register/conservatorRegister/conservatorRegisterOver";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
    {
      path: '/SaySome',
      name: 'SaySome',
      component: SaySome
    },
    {
      path: '/SelectLogin',
      name: 'SelectLogin',
      component: SelectLogin
    },
    {
      path: '/StudentLogin',
      name: 'StudentLogin',
      component: StudentLogin
    },
    {
      path: '/SelectRegister',
      name: 'SelectRegister',
      component: SelectRegister
    },
    {
      path: '/StudentRegister',
      name: 'StudentRegister',
      component: StudentRegister
    },
    {
      path: '/StudentRegisterOver',
      name: 'StudentRegisterOver',
      component: StudentRegisterOver
    },
    {
      path: '/TeacherRegister',
      name: 'TeacherRegister',
      component: TeacherRegister
    },
    {
      path: '/TeacherRegisterOver',
      name: 'TeacherRegisterOver',
      component: TeacherRegisterOver
    },
    {
      path: '/ConservatorRegister',
      name: 'ConservatorRegister',
      component: ConservatorRegister
    },
    {
      path: '/ConservatorRegisterOver',
      name: 'ConservatorRegisterOver',
      component: ConservatorRegisterOver
    },
    {
      path: '/AddFile',
      name: 'AddFile',
      component: AddFile
    },



]

const router = new VueRouter({
  routes
})

export default router
