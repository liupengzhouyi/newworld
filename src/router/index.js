import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../components/login/Login"
import Professiona from "../components/professiona/professiona";
import SelectLogin from '../views/login/selectLogin'
import StudentLogin from '../views/login/studentLogin/studentLogin'
import TeacherLogin from "../views/login/teacherLogin/teacherLogin";
import ConservatorLogin from "../views/login/conservatorLogin/conservatorLogin";
import SelectRegister from '../views/register/selectRegister'
import StudentRegister from '../views/register/studentRegister/studentRegister'
import StudentProfessiona from "../views/register/studentRegister/studentProfessiona";
import StudentRegisterOver from '../views/register/studentRegister/studentRegisterOver'
import TeacherRegister from '../views/register/teacherRegister/teacherRegister';
import TeacherProfessiona from "../views/register/teacherRegister/teacherProfessiona";
import TeacherRegisterOver from "../views/register/teacherRegister/TeacherRegisterOver";
import ConservatorRegister from "../views/register/conservatorRegister/conservatorRegister";
import ConservatorRegisterOver from "../views/register/conservatorRegister/conservatorRegisterOver";
import UploadTitle from "../views/teacher/uploadTitle/uploadTitle";
import ShowMyTitle from "../views/teacher/title/showMyTitle";
import SelectProfessionTeacher from "../views/student/selectTeacher/selectProfessionTeacher";
import SelectCollegeTeacher from "../views/student/selectTeacher/selectCollegeTeacher";
import TeacherTitle from "../views/student/title/teacherTitle/teacherTitle";
import DeleteTitle from "../views/teacher/title/deleteTitle";
import TitleApplication from "../views/student/title/titleApplication/titleApplication";
import TitleApplicationInformation from "../views/teacher/title/titleApplicationInformation/titleApplicationInformation";
import ApplicationInformation from "../views/student/title/ApplicationInformation/applicationInformation";
import AddSystemAD from "../views/conservator/systemAD/addSystemAD";
import SelectSysytemAD from "../views/conservator/systemAD/selectSysytemAD";
import SystemADInformation from "../views/conservator/systemAD/systemADInformation";
import GetTruePaperFile from "../views/student/paperFile/getTruePaperFile";
import GetHistoryFile from "../views/student/paperFile/historyFile/getHistoryFile";
import AddPaperFile from "../views/student/paperFile/addPaperFlie/addPaperFile";
import UpdatePaperFile from "../views/student/paperFile/updatePaperFile/updatePaperFile";
import StudentInformation from '../views/student/information/studentInformation';
import StudentInformationAir from "../views/student/information/studentInformationAir";
import TeacherGetTruePaperInformation from "../views/teacher/paperFile/teacherGetTruePaperInformation";

import SaySome from '../views/SaySome'
import AddFile from "../components/AddFile";

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
      path: '/TeacherLogin',
      name: 'TeacherLogin',
      component: TeacherLogin
    },
    {
      path: '/ConservatorLogin',
      name: 'ConservatorLogin',
      component: ConservatorLogin
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
      path: '/StudentProfessiona',
      name: 'StudentProfessionar',
      component: StudentProfessiona
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
      path: '/TeacherProfessiona',
      name: 'TeacherProfessiona',
      component: TeacherProfessiona
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
      path: '/UploadTitle',
      name: 'UploadTitle',
      component: UploadTitle
    },
    {
      path: '/Professiona',
      name: 'Professiona',
      component: Professiona
    },
    {
      path: '/ShowMyTitle',
      name: 'ShowMyTitle',
      component: ShowMyTitle
    },
    {
      path: "/SelectProfessionTeacher",
      name: 'SelectProfessionTeacher',
      component: SelectProfessionTeacher,
    },
    {
      path: "/SelectCollegeTeacher",
      name: 'SelectCollegeTeacher',
      component: SelectCollegeTeacher,
    },
    {
      path: '/TeacherTitle',
      name: 'TeacherTitle',
      component: TeacherTitle,
    },
    {
      path: '/DeleteTitle',
      name: 'DeleteTitle',
      component: DeleteTitle
    },
    {
      path: '/TitleApplication',
      name: 'TitleApplication',
      component: TitleApplication
    },
    {
      path: '/TitleApplicationInformation',
      name: 'TitleApplicationInformation',
      component: TitleApplicationInformation,
    },
    {
      path: '/ApplicationInformation',
      name: 'ApplicationInformation',
      component: ApplicationInformation,
    },
    {
      path: '/AddSystemAD',
      name: 'AddSystemAD',
      component: AddSystemAD,
    },
    {
      path: '/SelectSysytemAD',
      name: 'SelectSysytemAD',
      component: SelectSysytemAD
    },
    {
      path: '/SystemADInformation',
      name: 'SystemADInformation',
      component: SystemADInformation
    },
    {
      path: '/GetTruePaperFile',
      name: 'GetTruePaperFile',
      component: GetTruePaperFile
    },
    {
      path: '/GetHistoryFile',
      name: 'GetHistoryFile',
      component: GetHistoryFile
    },
    {
      path: '/AddPaperFile',
      name: 'AddPaperFile',
      component: AddPaperFile
    },
    {
      path: '/UpdatePaperFile',
      name: 'UpdatePaperFile',
      component: UpdatePaperFile
    },
    {
      path: '/StudentInformation',
      name: 'StudentInformation',
      component: StudentInformation,
    },
    {
      path: '/StudentInformationAir',
      name: 'StudentInformationAir',
      component: StudentInformationAir
    },
    {
      path: '/TeacherGetTruePaperInformation',
      name: 'TeacherGetTruePaperInformation',
      component: TeacherGetTruePaperInformation
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
