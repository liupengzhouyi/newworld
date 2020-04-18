<template>
    <div class="teacherRegister">
        <div class="myTop">
            <el-page-header @back="goBack" content="教师注册"></el-page-header>
        </div>
        <div class="myStyle">
            <el-form :model="reTeacher" status-icon ref="reTeacher" label-width="80px" class="demo-ruleForm">

                <el-form-item label="头像" prop="">
                    <el-container style="height: 120px; border: 1px solid #eee">
                        <el-aside width="120px" style="background-color: rgb(238, 241, 246)">
                            <el-image style="padding: 10px; width: 100px; height: 100px" :src="imageUrl" :fit="fill"></el-image>
                        </el-aside>
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
                                            <el-button slot="trigger" size="small" type="primary" icon="el-icon-edit" circle @click="delFile"></el-button>
                                            <br>
                                            <el-button  size="small" type="success" icon="el-icon-check" circle @click="submitUpload"></el-button>
                                        </el-upload>
                                    </ul>
                                </el-row>
                            </div>
                        </el-container>
                    </el-container>
                </el-form-item>

                <el-form-item label="教师编号">
                    <el-input v-model="reTeacher.teacher.teachernumber" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="姓名">
                    <el-input v-model="reTeacher.teacher.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="密码">
                    <el-input type="password" v-model="reTeacher.password1" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="确认密码">
                    <el-input type="password" v-model="reTeacher.password2" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="专业编号">
                    <el-input style="width: 80%" v-model.number="reTeacher.teacher.professionalid"></el-input>
                    <el-button type="primary" @click="getProfession()">查看专业编号</el-button>
                </el-form-item>

                <el-form-item label="联系方式">
                    <el-input v-model.number="reTeacher.teacher.phonenumber"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('reTeacher')">提交</el-button>
                    <el-button @click="resetForm()">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "teacherRegister",
        data() {
            return {
                reTeacher: {
                    password: "",
                    password1: "",
                    password2: "",
                    teacher: {
                        id: 0,
                        imageurl: "",
                        isdelete: 0,
                        name: "",
                        password: 0,
                        phonenumber: "",
                        professionalid: "",
                        teachernumber: ""
                    }
                },
                imageUrl: require("../../../assets/icons/User/body-scan-fill.svg"),
                info: null,
                returnObject: null,
                imageInfo: null,
            };
        },

        methods: {
            submitForm() {
                if (!this.reTeacher.teacher.teachernumber) {
                    this.$message.error('请输入学号');
                    return;
                }
                if (!this.reTeacher.teacher.name) {
                    this.$message.error('请输入用户名');
                    return;
                }
                if (!this.reTeacher.password1) {
                    this.$message.error('请输入密码');
                    return;
                }
                if (this.reTeacher.password2.length < 6) {
                    this.$message.error('密码至少6位');
                    return;
                }
                if (!this.reTeacher.password2) {
                    this.$message.error('请再一次输入密码');
                    return;
                }
                if (this.reTeacher.password2 != this.reTeacher.password1) {
                    this.$message.error('密码不一致');
                    return;
                } else {
                    this.reTeacher.password = this.reTeacher.password1;
                }
                if (this.reTeacher.teacher.professionalid == 0) {
                    this.$message.error('请输入专业编号');
                    return;
                }
                if (!this.reTeacher.teacher.phonenumber) {
                    this.$message.error('请输入联系方式');
                    return;
                }
                let that = this
                this.$axios.post(
                    '/teacher/add', that.reTeacher
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.info = response.data;
                        that.returnObject = response.data.returnObject;
                        that.registerOver(that.returnObject);
                    }
                )
            },
            registerOver(myParams) {
                this.$router.push(
                    {
                        name: 'TeacherRegisterOver',
                        params: myParams,
                    }
                )
            },
            resetForm() {
                this.reStudent.resetFields();
            },
            goBack() {
                this.$router.push({path:'/SelectRegister',})
            },
            getProfession() {
                this.$router.push({path: '/TeacherProfessiona',})
            },
            delFile() {
                this.fileList = [];
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
            submitUpload() {
                let that = this;
                let formData = new FormData();
                formData.append("theme", this.theme);
                formData.append("file", this.fileList[0].raw);

                this.$axios.post('/File/uploadFile', formData,
                    {"Content-Type": "multipart/form-data;charset=utf-8"}).
                then(
                    async function (response) {
                        that.imageInfo = response.data
                        if (response.data.returnKey === true) {
                            that.imageUrl = response.data.returnObject.fileDownloadUri
                            that.reTeacher.teacher.imageurl = that.imageUrl
                        }
                    }
                )
            },
        }
    }
</script>

<style scoped>
    .myTop{
        padding: 0.5%;
    }
    .myStyle {
        padding: 3% 20%;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .el-card__body {
        padding: 15px 22px;
    }
</style>