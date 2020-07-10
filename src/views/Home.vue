<template>
  <div class="home">

    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

      <el-submenu index="2">
        <template slot="title">版本</template>
        <el-menu-item index="2-1">版本 V 1.0.0</el-menu-item>
        <el-menu-item index="2-2">版本 V 2.0.0</el-menu-item>
        <el-menu-item index="2-3">版本 V 3.0.0</el-menu-item>

        <el-submenu index="2-4">
          <template slot="title">版本 V 4.0.0</template>
          <el-menu-item index="2-4-1">版本 V 4.1.0</el-menu-item>
          <el-menu-item index="2-4-2">版本 V 4.2.0</el-menu-item>
          <el-menu-item index="2-4-3">版本 V 4.3.0</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="1">关于</el-menu-item>

      <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank" justify=end>订单管理</a></el-menu-item>-->

      <el-header style="text-align: right; padding: 5px;">
        <el-button type="danger" @click="register">注册</el-button>
        <el-button type="success" @click="login">登陆</el-button>
      </el-header>

    </el-menu>

    <HelloWorld msg="毕业设计选题管理系统"/>

    <img alt="Vue logo" src="../assets/schoolLogo.png" height="512" width="512">

    <!--<div>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>教师</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
              <el-button @click="showMeTitle()">教师题目</el-button>
            </div>
            <div>
              <el-button @click="uploadTitle()">上传教师题目</el-button>
            </div>
            <div>
              <el-button @click="createGroup()">创建群聊</el-button>
            </div>
            <div>
              <el-button @click="selectMyGroupOfTeacher()">聊天信息</el-button>
            </div>


          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>学生</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
              <el-button @click="findTeahcer1()">查看本专业教师</el-button>
            </div>
            <div>
              <el-button @click="findTeacher2()">查看本系教师</el-button>
            </div>
            <div>
              <el-button @click="studentGetApplication">查看我的申请</el-button>
            </div>
            <div>
              <el-button @click="studentGetpaperFile()">查看论文文件</el-button>
            </div>
            <div>
              <el-button @click="studentInformation()">我的信息</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>管理员</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
              <el-button @click="findConservator()">添加系统公告</el-button>
            </div>
            <div>
              <el-button @click="selectSystremAD">查看所有系统公告</el-button>
            </div>
            <div>
              <el-button @click="studentGetApplication">查看我的申请</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      headerList: [
        {id: '1', name: 'Home', title: '首页'},
        {id: '2', name: 'Course', title: '免费课程'},
        {id: '3', name: 'LightCourse', title: '轻课'},
        {id: '4', name: 'Micro', title: '学位课程'}
      ],
      isShow: false,
    }
  },
  methods: {
    login(){
      //this.$router.push("/cart")
      //传递的参数用{{ $route.query.goodsId }}获取
      this.$router.push({path:'/SelectLogin',})
      //this.$router.go(-2)
      //后退两步
    },
    register() {
      this.$router.push({path:'/SelectRegister',})
    },
    showMeTitle() {
      this.$router.push({path:'/ShowMyTitle',})
    },
    uploadTitle() {
      this.$router.push({path:'/UploadTitle',})
    },
    findTeahcer1() {
      this.$router.push({path:'/SelectProfessionTeacher',})
    },
    findTeacher2() {
      this.$router.push({path:'/SelectCollegeTeacher',})
    },
    studentGetApplication() {
      this.$router.push({path:'/ApplicationInformation',})
    },
    findConservator() {
      this.$router.push({path:'/AddSystemAD',})
    },
    selectSystremAD() {
      this.$router.push({path:'/SelectSysytemAD',})
    },
    studentGetpaperFile() {
      this.$router.push({path:'/GetTruePaperFile',})
    },
    studentInformation() {
      this.$router.push({path:'/StudentInformation',})
    },
    createGroup() {
      this.$router.push({path:'/CreateGroup',})
    },
    selectMyGroupOfTeacher() {
      this.$router.push({path:'/GroupInformation',})
    },





  },
  components: {
    HelloWorld
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>