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
                    <el-button type="danger">忘记密码</el-button>

                    <el-button type="success" @click="this.login()">登陆</el-button>
                </el-row>
            </div>
            <div>
                {{ info }}
            </div>
        </div>
    </div>
</template>

<script>
    //  import { userLogin } from '../../api/api';

    import Vue from 'vue';

    export default {
        name: "landing",
        data() {
            return {
                userName: '',
                password: '',
                isBtnLoading: false,
                info: null
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
                    Vue.axios
                        .get('http://127.0.0.1:8080/indexCationPaper/now')
                        .then(function (response) {
                            console.log(response);
                            console.log(response.data);
                            this.info = response.data
                        })

                }
            }


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
    .login_logo {
        height: 100%;
    }
    .login_btn {
        width: 100%;
        font-size: 16px;
        background: -webkit-linear-gradient(left, #19cbc5, #fa216d); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #e24cce, #6e0edc); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #bf7a46, #2154FA); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #4dac52, #a71a2f); /* 标准的语法 */
        filter: brightness(1.4);
    }
    .login_style{
        width: 200px;
    }
</style>