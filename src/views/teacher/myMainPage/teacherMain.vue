<template>
    <div class="teacherMain">
        <div v-show="showKey001">
            <LiupengHead></LiupengHead>
        </div>

        <div>
            <div class="header">
                <h1>高校毕业设计管理体系</h1>
                <p>{{ new Date() }}</p>
            </div>

            <!--<div class="navbar">
                <a href="#">链接</a>
                <a href="#">链接</a>
                <a href="#">链接</a>
                <a href="#" class="right">
                    <el-avatar :size="size" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                </a>
            </div>-->

            <div class="row">
                <div class="side">
                    <h2>
                        {{ name }}
                    </h2>
                    <h3 >
                        教师编号: <span style="font-size: small"> {{ this.$GLOBAL.userNumber }} </span>
                    </h3>
                    <div>
                        <el-image style="width: 100px; height: 100px"
                                  :src="this.$GLOBAL.imageurl"
                                  fit="contain">

                        </el-image>
                    </div>
                    <h3 >
                        联系方式: <span style="font-size: x-large">{{ phoneNumber  }}</span>
                    </h3>
                    <h3>更多操作</h3>
                    <el-timeline reverse="false">
                        <el-timeline-item align="left">
                            <div>
                                <el-button @click="teacherReSetPassword()">修改密码</el-button>
                            </div>
                        </el-timeline-item>
                        <el-timeline-item align="left">
                            <div>
                                <el-button @click="selectMyGroupOfTeacher()">聊天信息</el-button>
                            </div>
                        </el-timeline-item>
                        <el-timeline-item align="left">
                            <div>
                                <el-button @click="createGroup()">创建群聊</el-button>
                            </div>
                        </el-timeline-item>
                        <el-timeline-item align="left">
                            <div>
                                <el-button @click="uploadTitle()">上传教师题目</el-button>
                            </div>
                        </el-timeline-item>
                        <el-timeline-item align="left">
                            <div>
                                <el-button @click="showMeTitle()">教师题目</el-button>
                            </div>
                        </el-timeline-item>
                    </el-timeline>







                </div>

                <div class="main">
                    <SystemAD></SystemAD>
                </div>
            </div>

            <div class="footer">
                <h2>底部内容</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import SystemAD from "../../../components/systemAD/systemAD";
    import LiupengHead from "../../../components/tools/liupengHead";
    export default {
        name: "teacherMain",
        components: {LiupengHead, SystemAD, },
        data() {
            return {
                info: null,
                returnObject: null,
                name: "",
                phoneNumber: "",
                showKey001: false,

            };
        },
        created() {
            let that = this
            that.isShow001();
            this.$axios.post(
                '/teacher/selectByNumber',
                {
                    "id": 0,
                    "imageurl": "",
                    "isdelete": 0,
                    "name": "",
                    "password": 0,
                    "phonenumber": "",
                    "professionalid": "",
                    "teachernumber": this.$GLOBAL.userNumber
                },
            ).then(
                async function (response) {
                    console.log(response);
                    console.log(response.data);
                    that.info = response.data;
                    that.returnObject = that.info.returnObject;
                    that.name = that.returnObject.name;
                    that.phoneNumber = that.returnObject.phonenumber;

                }
            )
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
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
            isShow001() {
                let that = this
                if (that.$GLOBAL.landing === 1) {
                    that.showKey001 = false;
                } else {
                    that.showKey001 = true;
                }
            },
            teacherReSetPassword() {
                this.$router.push({path:'/TeacherResetPassword',})
            }
        },


    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    /* body 样式 */
    body {
        font-family: Arial;
        margin: 0;
    }

    /* 标题 */
    .header {
        padding: 80px;
        text-align: center;
        background: #1abc9c;
        color: white;
    }

    /* 标题字体加大 */
    .header h1 {
        font-size: 40px;
    }

    /* 导航 */
    .navbar {
        overflow: hidden;
        background-color: #333;
    }

    /* 导航栏样式 */
    .navbar a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
    }

    /* 右侧链接*/
    .navbar a.right {
        float: right;
    }

    /* 鼠标移动到链接的颜色 */
    .navbar a:hover {
        background-color: #ddd;
        color: black;
    }

    /* 列容器 */
    .row {
        display: -ms-flexbox; /* IE10 */
        display: flex;
        -ms-flex-wrap: wrap; /* IE10 */
        flex-wrap: wrap;
    }

    /* 创建两个列 */
    /* 边栏 */
    .side {
        -ms-flex: 30%; /* IE10 */
        flex: 30%;
        background-color: #f1f1f1;
        padding: 20px;
    }

    /* 主要的内容区域 */
    .main {
        -ms-flex: 70%; /* IE10 */
        flex: 70%;
        background-color: white;
        padding: 20px;
    }

    /* 测试图片 */
    .fakeimg {
        background-color: #aaa;
        width: 100%;
        padding: 20px;
    }

    /* 底部 */
    .footer {
        padding: 20px;
        text-align: center;
        background: #ddd;
    }

    /* 响应式布局 - 在屏幕设备宽度尺寸小于 700px 时, 让两栏上下堆叠显示 */
    @media screen and (max-width: 700px) {
        .row {
            flex-direction: column;
        }
    }

    /* 响应式布局 - 在屏幕设备宽度尺寸小于 400px 时, 让导航栏目上下堆叠显示 */
    @media screen and (max-width: 400px) {
        .navbar a {
            float: none;
            width: 100%;
        }
    }
</style>