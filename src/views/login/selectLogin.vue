<template>
    <div class="selectLogin">
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
                            <el-image style="width: 200px; height: 200px" :src="url6" :fit="fill"></el-image>
                            <el-button type="success" >登陆</el-button>
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
                            <el-image style="width: 200px; height: 200px" :src="url5" :fit="fill"></el-image>
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
                            <el-image style="width: 200px; height: 200px" :src="url4" :fit="fill"></el-image>
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
                url4: "http://127.0.0.1:8080/File/downloadFile/%E6%88%AA%E5%B1%8F2020-04-07%20%E4%B8%8B%E5%8D%887.01.05.png",
                url5: 'http://127.0.0.1:8080/File/downloadFile/rxdctfvygbuhnijtfvygbu.png',
                url6: 'http://127.0.0.1:8080/File/downloadFile/快结婚吧.png',

            }
        },
        methods: {
            studentLogin() {
                this.$router.push({path: '/StudentLogin',})
            },
        }
    }
</script>

<style scoped>
    .nav {
        padding: 5% 20%;
    }
</style>