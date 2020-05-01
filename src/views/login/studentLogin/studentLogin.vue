<template>
    <div class="studentLogin">
        <div class="myTop">
            <el-page-header @back="goBack" content="学生登陆"></el-page-header>
        </div>
        <div class="login_form">
            <div>
                <img alt="Vue logo" src="../../../assets/logo.png">
            </div>
            <div>
                <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="userName">
            </div>
            <div>
                <input type="password"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password">
            </div>
            <div>
                <el-row>
                    <el-button type="danger" @click="this.ppp">忘记密码</el-button>
                    <el-button type="success" @click="this.login">登陆</el-button>
                </el-row>
            </div>
            <div>
                {{ info }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "studentLogin",
        data() {
            return {
                userName: '',
                password: '',
                isBtnLoading: false,
                info: null,
                pp: "1"
            }
        },
        created () {
        },
        computed: {
            btnText() {
                if (this.isBtnLoading) return '登录中...';
                return '登录';
            }
        },
        methods: {
            login() {

                if (!this.userName) {
                    this.$message.error('请输入用户名');
                    return;
                }
                if (!this.password) {
                    this.$message.error('请输入密码');
                    return;
                }
                if (this.userName === '' || this.password === '') {
                    alert('账号或密码不能为空');
                } else {
                    let that = this
                    this.$axios.post(
                        '/student/landing',
                        {
                            "password": this.password,
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
                                "studentid": this.userName
                            }
                        }
                    ).then(
                        async function (response) {
                            console.log(response);
                            console.log(response.data);
                            that.info = response.data
                            if (that.info.returnKey === true) {
                                that.$GLOBAL.landing = 1
                                that.$GLOBAL.userNumber = that.userName
                                that.$GLOBAL.userType = 3
                                that.$GLOBAL.imageurl = that.info.returnObject.imageurl
                                that.$GLOBAL.userName = that.info.returnObject.name
                                that.$GLOBAL.professionalid = that.info.returnObject.prodessionalid
                                that.jump()
                            } else {
                                that.$GLOBAL.landing = -1
                            }
                        }
                    )
                }
            },
            ppp() {
                let that = this
                this.$axios.post('/group/getAll').then(
                    function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.info = response.data
                    }
                )
            },
            jump(){
                this.$router.push({path:'/StudentMain',})
            },
            goBack() {
                this.$router.push({path:'/SelectLogin',})
            },
        }
    }
</script>

<style scoped>
    .login_form {
        padding-top: 5%;
        padding-left: 30%;
        padding-right: 30%;
    }
    .qxs-ic_user {
        background: url("../../../assets/icons/User/user-3-fill.svg") no-repeat;
        background-size: 13px 15px;
        background-position: 3%;
    }
    .qxs-ic_password {
        background: url("../../../assets/icons/System/lock-password-line.svg") no-repeat;
        background-size: 13px 15px;
        background-position: 3%;
        margin-bottom: 20px;
    }
    .myTop{
        padding: 0.5%;
    }
</style>