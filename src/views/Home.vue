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

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="毕业设计选题管理系统"/>
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
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>