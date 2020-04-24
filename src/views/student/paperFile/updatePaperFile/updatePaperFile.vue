<template>
    <div class="updatePaperFile">
        <div class="myTop">
            <el-page-header @back="goBack" content="更新论文文件"></el-page-header>
        </div>
        <div style="padding: 20px 0"></div>

        <div class="myDiv">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <h2>{{ title }}</h2>
                </div>
                <div class="myStyle">
                    <el-form status-icon label-width="80px" class="demo-ruleForm">

                        <el-form-item label="环节">
                            <div align="left">
                                <b style="color: mediumseagreen"> {{ name }} </b>
                            </div>

                        </el-form-item>

                        <el-form-item label="概述">
                            <el-input
                                    type="textarea"
                                    :rows="2"
                                    placeholder="请输入文件概述"
                                    v-model="paperFileIntroduction">
                            </el-input>
                        </el-form-item>

                        <el-form-item label="文件" prop="" align="center">
                            <el-container style="border: 1px solid #eee">
                                <el-container>
                                    <div class="el-card__body">
                                        <el-row style="margin: 0">
                                            <ul style="margin: 0;display: inline-block;">
                                                <el-upload
                                                        class="upload"
                                                        ref="upload"
                                                        action="string"
                                                        :on-preview="handlePreview"
                                                        :on-remove="handleRemove"
                                                        :file-list="fileList"
                                                        :auto-upload="false"
                                                        :http-request="uploadFile"
                                                        :show-file-list="true"
                                                        :on-change="handleChange">
                                                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                                                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传文件</el-button>
                                                </el-upload>
                                            </ul>
                                        </el-row>
                                    </div>
                                </el-container>
                            </el-container>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="submitForm">提交</el-button>
                            <el-button>重置</el-button>
                        </el-form-item>

                    </el-form>
                </div>
            </el-card>
        </div>
        <!--<div>
            <b>
                {{ temp }}
            </b>
            <b>
                {{ fileinfo }}
            </b>
            {{ paperFileName }}
            {{ paperFileIntroduction }}
            {{ fileUrl }}
            <p style="color: #42b983">
                {{ info }}
            </p>
            <p style="color: #409EFF">
                {{ returnObject }}
            </p>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "updatePaperFile",
        data() {
            return {
                title: "更新论文文件",
                titleId: this.$route.params.titleId,
                name: this.$route.params.name,
                fileinfo: null,
                info: null,
                filReturnObject: null,
                returnObject: null,
                paperFileIntroduction: "",
                fileUrl: "",
                fileList: [],
                temp: "",

            }
        },
        created () {

        },
        methods: {
            submitForm() {
                if (!this.fileUrl) {
                    this.$message.error("文件未上传");
                    return;
                }
                let that = this
                this.$axios.post(
                    '/projectfile/update',
                    {
                        "approval": "",
                        "approvaldata": "",
                        "fileurl": that.fileUrl,
                        "id": 0,
                        "introduction": that.paperFileIntroduction,
                        "versionkey": 0,
                        "name": that.name,
                        "studentnumber": that.$GLOBAL.userNumber,
                        "teachernumber": "",
                        "titleid": 22,
                        "upladdata": "",
                        "version": ""
                    }
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.info = response.data;
                        that.returnObject = response.data.returnObject;
                    }
                )
            },
            goBack() {
                this.$router.push({path:'/',})
            },
            submitUpload() {
                let that = this;
                let formData = new FormData();
                formData.append("theme", this.theme);
                formData.append("file", this.fileList[0].raw);
                this.$axios.post('/File/uploadFile', formData,
                    {"Content-Type": "multipart/form-data;charset=utf-8"}).
                then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.fileinfo = response.data;
                        that.filReturnObject = that.fileinfo.returnObject;
                        that.temp = that.fileinfo.returnKey
                        if (that.fileinfo.returnKey === true) {
                            that.$notify({
                                title: '成功',
                                message: '文件上传成功',
                                type: 'success'
                            });
                            that.fileUrl = that.filReturnObject.fileDownloadUri;
                        } else {
                            that.$notify.error({
                                title: '错误',
                                message: '文件上传失败'
                            });
                        }
                    }
                )
            },
            handleChange(file, fileList) {
                this.fileList = fileList;
            },
            uploadFile(file) {
                this.formData.append("file", file.file);
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }

        }
    }
</script>

<style scoped>
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
        align-items: center;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }
    .myDiv {
        margin-left: auto;
        margin-right: auto;
    }
</style>