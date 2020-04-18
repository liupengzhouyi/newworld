<template>
    <div class="uploadTitle">
        <div class="myTop">
            <el-page-header @back="goBack" content="教师上传毕业设计选题"></el-page-header>
        </div>
        <div class="myDiv">
            <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                    <h2>
                        <span>{{ thisTitle }}</span>
                    </h2>
                </div>
                <div>
                    <el-form :model="project" status-icon ref="project" label-width="80px" class="demo-ruleForm">
                        <el-form-item label="选题名称">
                            <el-input v-model="project.title" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="描述文件">
                            <el-container>
                                <div class="el-card__body">
                                    <el-row style="margin: 0">
                                        <ul style="margin: 0;display: inline-block;">
                                            <el-upload
                                                    class="upload"
                                                    ref="upload"
                                                    action="string"
                                                    :file-list="this.fileList"
                                                    :auto-upload="false"
                                                    :http-request="uploadFile"
                                                    :show-file-list="false"
                                                    :on-change="handleChange"
                                                    :on-preview="handlePreview"
                                                    :on-remove="handleRemove"
                                                    multiple="multiple">
                                                <el-button slot="trigger" size="small" type="primary" @click="delFile">选取文件</el-button>
                                                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                                            </el-upload>
                                        </ul>
                                    </el-row>
                                </div>
                            </el-container>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">立即创建</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
        <div>
            {{ project }}
        </div>
        <div>
            <h1>
                {{ info }}
            </h1>
        </div>
        <div>
            <h1>
                {{ fileInfo }}
            </h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "uploadTitle",
        data() {
            return {
                project: {
                    fileurl: "",
                    id: 0,
                    isselect: 0,
                    studentnumber: "",
                    teacherid: 0,
                    title: ""
                },
                fileList: {
                    name: '',
                    url: '',
                },
                fileInfo: null,
                info: null,
                thisTitle: "教师上传毕业设计选题",
                returnObject: null,

            }
        },
        methods: {
            onSubmit() {
                if (!this.project.title) {
                    this.$message.error('请输入选题题目名称');
                    return;
                }
                let that = this;
                that.project.id = 123;
                that.project.teacherid = that.$GLOBAL.userNumber;
                this.$axios.post(
                    '/project/add', that.project
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.info = response.data;
                        that.returnObject = response.data.returnObject;
                        // that.registerOver(that.returnObject);
                    }
                )
            },
            delFile() {
                this.fileList = [];
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
                        if (response.data.returnKey === true) {
                            that.fileInfo = response.data;
                            that.project.fileurl = response.data.returnObject.fileDownloadUri
                        }
                    }
                )
            },
            goBack() {
                this.$router.push({path:'/',})
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
            },
        }


    }
</script>

<style scoped>
    .myTop{
        padding: 10px;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .myDiv {
        margin-left: auto;
        margin-right: auto;
    }
    .box-card {
        align-items: center;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }
</style>