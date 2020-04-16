<template>
    <div class="landing">
        <div class="login_form">
            <div>
                <img alt="Vue logo" src="../../assets/logo.png">
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
        </div>
    </div>
</template>

<script>
    //  import { userLogin } from '../../api/api';

    export default {
        name: "landing",
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
                                that.pp = "1234567"
                                that.jump()
                            } else {
                                that.$GLOBAL.landing = -1
                                that.pp = "123456"
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
                //this.$router.push("/cart")
                //传递的参数用{{ $route.query.goodsId }}获取
                this.$router.push({path:'/SaySome',})
                //this.$router.go(-2)
                //后退两步
            },
        }
    }
</script>
<style>
    .login_form {
        padding-top: 5%;
        padding-left: 30%;
        padding-right: 30%;
    }
    .qxs-ic_user {
        background: url("../../assets/icons/User/user-3-fill.svg") no-repeat;
        background-size: 13px 15px;
        background-position: 3%;
    }
    .qxs-ic_password {
        background: url("../../assets/icons/System/lock-password-line.svg") no-repeat;
        background-size: 13px 15px;
        background-position: 3%;
        margin-bottom: 20px;
    }
</style>