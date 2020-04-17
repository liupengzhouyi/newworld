<template>
    <div class="selectLogin">
        <div class="myTop">
            <el-page-header @back="goBack" content="登陆"></el-page-header>
        </div>
        <div class="nav">
            <el-row :gutter="12">
                <el-col :span="8">
                    <div>
                        <el-card shadow="hover">
                            <div>
                                <h2>
                                    {{ say1 }}
                                </h2>
                            </div>
                            <el-image style="width: 200px; height: 200px" :src="url1" :fit="fill"></el-image>
                            <el-button type="success" @click="teacherLogin">登陆</el-button>
                        </el-card>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div>
                        <el-card shadow="hover">
                            <div>
                                <h2>
                                    {{ say2 }}
                                </h2>
                            </div>
                            <el-image style="width: 200px; height: 200px" :src="url2" :fit="fill"></el-image>
                            <el-button type="success" @click="studentLogin">登陆</el-button>
                        </el-card>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div>
                        <el-card shadow="hover">
                            <div>
                                <h2>
                                    {{ say3 }}
                                </h2>
                            </div>
                            <el-image style="width: 200px; height: 200px" :src="url3" :fit="fill"></el-image>
                            <el-button type="success" >登陆</el-button>
                        </el-card>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "selectLogin",
        data() {
            return {
                say1: "教师登陆",
                say2: "学生登陆",
                say3: "管理员登陆",
                url1: require("../../assets/icons/User/body-scan-fill.svg"),
                url2: require("../../assets/icons/User/admin-line.svg"),
                url3: require("../../assets/icons/User/account-circle-fill.svg"),
            }
        },
        methods: {
            studentLogin() {
                this.$router.push({path: '/StudentLogin',})
            },
            teacherLogin() {
                this.$router.push({path: '/TeacherLogin',})
            },
            goBack() {
                this.$router.push({path:'/',})
            },
        }
    }
</script>

<style scoped>
    .nav {
        padding: 5% 20%;
    }
</style>