<template>
    <div class="studentInformation">
        <div class="myTop">
            <el-page-header @back="goBack" content="我的信息"></el-page-header>
        </div>
        <div style="padding: 20px 0"></div>
        <div class="lpMyWay">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="我的信息" name="1">
                    <div>
                        头像: {{ returnObject.student.imageurl }}
                    </div>
                    <div>
                        学号: {{ returnObject.student.studentid }}
                    </div>
                    <div>
                        姓名: {{ returnObject.student.name }}
                    </div>
                    <div>
                        联系方式: {{ returnObject.student.phonenumber }}
                    </div>
                </el-collapse-item>
                <el-collapse-item title="题目信息" name="2">
                    <div>题目：{{ returnObject.project.title }}</div>
                    <div>题目下载地址: {{ returnObject.project.fileurl }}</div>
                </el-collapse-item>
                <el-collapse-item title="选题通过信息" name="3">
                    <div>申请日期: {{ returnObject.selecttitle.applicationdata }}</div>
                    <div>通过日期: {{ returnObject.selecttitle.passdata }}</div>
                </el-collapse-item>
                <el-collapse-item title="导师信息" name="4">
                    <div>
                        导师姓名: {{ returnObject.teacher.imageurl }}
                    </div>
                    <div>
                        导师姓名: {{ returnObject.teacher.name }}
                    </div>
                    <div>
                        导师编号: {{ returnObject.teacher.teachernumber }}
                    </div>
                    <div>
                        导师联系方式: {{ returnObject.teacher.phonenumber }}
                    </div>

                </el-collapse-item>
            </el-collapse>
        </div>
        <!--<div>
            {{ returnObject }}
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "studentInformation",
        data() {
            return {
                activeNames: ['1'],
                info: null,
                returnObject: null,

            };
        },
        created() {
            let that = this
            this.$axios.post(
                '/OtherContrller/selectMyTitle',
                {
                    "id": 0,
                    "imageurl": "",
                    "isdelete": 0,
                    "name": "",
                    "password": 0,
                    "phonenumber": "",
                    "prodessionalid": 0,
                    "studentid": that.$GLOBAL.userNumber
                }
            ).then(
                async function (response) {
                    console.log(response);
                    console.log(response.data);
                    that.info = response.data;
                    that.returnObject = that.info.returnObject;
                }
            )
        },
        methods: {
            goBack() {
                this.$router.push({path: '/',})
            },

            handleChange(val) {
                console.log(val);
            },
        },

    }
</script>

<style scoped>
    .lpMyWay {
        width: 900px;
        margin: 0 auto;
        background-color: yellowgreen;
        align-items: center;
    }
</style>