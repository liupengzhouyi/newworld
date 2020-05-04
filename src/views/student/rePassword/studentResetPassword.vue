<template>
    <div class="studentResetPassword">

        <div class="myTop">
            <el-page-header @back="goBack" content="修改密码"></el-page-header>
        </div>

        <div class="lpMyWay">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>学生修改密码</span>
                </div>
                <div>
                    <el-form label-width="80px">
                        <el-form-item label="原密码">
                            <el-input type="password" v-model="mydata.password"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码">
                            <el-input type="password" v-model="mydata.password1"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码">
                            <el-input type="password" v-model="mydata.password2"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button>取消</el-button>
                            <el-button type="primary" @click="onSubmit">立即修改</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
        <div>
            {{ info }}
        </div>
        <div>
            {{ returnObject }}
        </div>


    </div>
</template>

<script>
    export default {
        name: "studentResetPassword",
        data() {
            return {
                info: null,
                returnObject: null,
                mydata: {
                    "password": "",
                    "password1": "",
                    "password2": "",
                    "student": {
                        "id": 0,
                        "imageurl": "",
                        "isdelete": 0,
                        "name": "",
                        "password": 0,
                        "phonenumber": "",
                        "prodessionalid": 0,
                        "studentid": this.$GLOBAL.userNumber
                    }
                },
                key: null,
            }
        },
        methods:{
            goBack() {
                this.$router.push({path: '/StudentMain',})
            },
            onSubmit() {
                let that = this
                this.$axios.post(
                    '/student/rePassword',
                    that.mydata,
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.info = response.data;
                        that.returnObject = that.info.returnObject;
                        if(that.info.returnKey === true) {
                            that.$alert('修改成功，跳转登陆页面', '修改结果', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    console.log(action)
                                    that.$router.push({path:'/',})
                                },
                            });
                        } else {
                            that.$alert('修改失败', '修改结果', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    console.log(action)
                                    that.$router.push({path:'/StudentMain',})
                                },
                            });
                        }
                    }
                );
            }
        }
    }
</script>

<style scoped>
    .lpMyWay {
        width: 480px;
        height: 100%;
        margin: 0 auto;
        align-items: center;
    }
</style>