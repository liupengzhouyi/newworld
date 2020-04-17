<template>
    <div class="selectRegister">
        <div class="myTop">
            <el-page-header @back="goBack" content="注册"></el-page-header>
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
                            <el-button type="danger" @click="teacherRegister">注册</el-button>
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
                            <el-button type="danger" @click="studentRegister">注册</el-button>
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
                            <el-button type="danger" >注册</el-button>
                        </el-card>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "selectRegister",
        data() {
            return {
                say1: "教师注册",
                say2: "学生注册",
                say3: "管理员注册",
                url1: require("../../assets/icons/User/body-scan-fill.svg"),
                url2: require("../../assets/icons/User/admin-line.svg"),
                url3: require("../../assets/icons/User/account-circle-fill.svg"),
            }
        },
        methods: {
            studentRegister() {
                this.$router.push({path: '/StudentRegister',})
            },
            teacherRegister() {
                this.$router.push({path: '/TeacherRegister',})
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