<template>
    <div class="liupengHead">
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

            <el-header style="text-align: right; padding: 5px;">
                <el-button type="danger" @click="register">注册</el-button>
                <el-button type="success" @click="login">登陆</el-button>
            </el-header>

        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "liupengHead",
        methods: {
            login() {
                //this.$router.push("/cart")
                //传递的参数用{{ $route.query.goodsId }}获取
                this.$router.push({path: '/SelectLogin',})
                //this.$router.go(-2)
                //后退两步
            },
            register() {
                this.$router.push({path: '/SelectRegister',})
            },
        },
    }
</script>

<style scoped>

</style>