<template>
    <div class="teacherEditPaperFile">
        <div class="myTop">
            <el-page-header @back="goBack" content="论文文件历史记录"></el-page-header>
        </div>
        <div style="padding: 20px 0"></div>
        <div class="lpMyWay">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>{{ returnObject.name }}</span>
                    <el-button style="float: right; padding: 3px 0" type="text">{{ returnObject.version }}</el-button>
                </div>
                <div>
                    <h6 align="left">
                        您的指导意见
                    </h6>
                </div>
                <el-input
                        type="textarea"
                        :rows="6"
                        :placeholder="getPlaceholder(returnObject.approval)"
                        v-model="textarea">
                </el-input>
                <div style="padding: 20px 0"></div>
                <el-row>
                    <el-button type="danger" @click="resetTextArea" round>重置</el-button>
                    <el-button type="success" @click="submit" round>提交</el-button>
                </el-row>
            </el-card>
        </div>
        <!--<div>
            {{ returnObject }}
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "teacherEditPaperFile",
        data() {
            return {
                title: "教师指导论文文件",
                id: this.$route.params.paperFileId,
                titleId: this.$route.params.id,
                info: null,
                returnObject: null,
                info2: null,
                returnObject2: null,
                textarea: "",
            }
        },
        created () {
            let that = this
            this.$axios.post(
                '/projectfile/selectByID',
                {
                    "approval": "",
                    "approvaldata": "",
                    "fileurl": "",
                    "id": that.id,
                    "introduction": "",
                    "name": "",
                    "studentnumber": "",
                    "teachernumber": "",
                    "titleid": 0,
                    "upladdata": "",
                    "version": "",
                    "versionkey": 0
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
                this.$router.push(
                    {
                        name: 'TeacherGetTruePaperInformation',
                        params: {
                            titleId: this.titleId,
                        }
                    }
                )
            },
            download(path) {
                return path
            },
            history(temp) {
                this.$router.push(
                    {
                        name: 'TeacherGetHistoryFile',
                        params: {
                            titleId: temp.titleid,
                            name: temp.name,
                        }
                    }
                )
            },
            updatePaperFile(temp) {
                this.$router.push(
                    {
                        name: 'UpdatePaperFile',
                        params: {
                            titleId: temp.titleid,
                            name: temp.name,
                        }
                    }
                )
            },
            resetTextArea() {
                this.textarea = "";
            },
            submit() {
                let that = this
                this.$axios.post(
                    '/projectfile/approvalPaperFile',
                    {
                        "approval": that.textarea,
                        "approvaldata": "",
                        "fileurl": "",
                        "id": that.id,
                        "introduction": "",
                        "name": "",
                        "studentnumber": "",
                        "teachernumber": "",
                        "titleid": 0,
                        "upladdata": "",
                        "version": "",
                        "versionkey": 0
                    }
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.info2 = response.data;
                        that.returnObject2 = that.info2.returnObject;
                        if (that.info2.returnKey === true) {
                            that.$notify({
                                title: '成功',
                                message: that.info2.why,
                                type: 'success'
                            });
                        } else {
                            that.$notify.error({
                                title: '错误',
                                message: that.info2.why,
                            });
                        }
                    }
                )
            },
            getPlaceholder(text) {
                if (text.toString().length == 0) {
                    return "请输入内容";
                } else {
                    return text.toString();
                }
            }
        }
    }
</script>

<style scoped>
    .lpMyWay {
        width: 800px;
        margin: 0 auto;
        background-color:white;
        align-items: center;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 800px;
    }

</style>