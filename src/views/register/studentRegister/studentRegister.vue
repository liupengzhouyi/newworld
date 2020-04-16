<template>
    <div class="studentRegister">
        <div class="myTop">
            <el-page-header @back="goBack" content="学生注册"></el-page-header>
        </div>
        <div class="myStyle">
            <el-form :model="reStudent" status-icon ref="reStudent" label-width="80px" class="demo-ruleForm">

                <el-form-item label="头像" prop="">
                    <el-container style="height: 120px; border: 1px solid #eee">
                        <el-aside width="70%" style="background-color: rgb(238, 241, 246)">
                            <el-image style="padding: 10px; width: 100px; height: 100px" :src="imageUrl" :fit="fill"></el-image>
                        </el-aside>
                        <el-container>
                            <el-upload
                                    class="upload"
                                    ref="upload"
                                    action="string"
                                    :file-list="fileList"
                                    :auto-upload="false"
                                    :http-request="uploadFile"
                                    :on-change="handleChange"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    multiple="multiple">
                                <ol>
                                    <li>
                                        <el-button slot="trigger" size="small" type="primary" @click="delFile">
                                            选取文件
                                        </el-button>
                                    </li>
                                    <li>
                                        <el-button
                                                style="margin-left: 10px;"
                                                size="small"
                                                type="success"
                                                @click="submitUpload">
                                            上传到服务器
                                        </el-button>
                                    </li>
                                </ol>
                            </el-upload>
                        </el-container>
                    </el-container>
                </el-form-item>

                <el-form-item label="学号">
                    <el-input v-model="reStudent.student.studentid" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="姓名">
                    <el-input v-model="reStudent.student.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="密码">
                    <el-input type="password" v-model="reStudent.password1" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="确认密码">
                    <el-input type="password" v-model="reStudent.password2" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="专业编号">
                    <el-input style="width: 80%" v-model.number="reStudent.student.prodessionalid"></el-input>
                    <el-button type="primary" @click="resetForm('reStudent')">查看专业编号</el-button>
                </el-form-item>

                <el-form-item label="联系方式">
                    <el-input v-model.number="reStudent.student.phonenumber"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('reStudent')">提交</el-button>
                    <el-button @click="resetForm()">重置</el-button>
                </el-form-item>
            </el-form>
            <div>
                {{ reStudent }}
            </div>
            <div>
                {{ info }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "studentRegister",
        data() {
            return {
                reStudent: {
                    password: "",
                    password1: "",
                    password2: "",
                    student: {
                            id: 0,
                            imageurl: "",
                            isdelete: 0,
                            name: "",
                            password: 0,
                            phonenumber: "",
                            prodessionalid: 0,
                            studentid: ""
                    }
                },
                imageUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                info: null,
            };
        },

        methods: {
            submitForm() {
                if (!this.reStudent.student.studentid) {
                    this.$message.error('请输入学号');
                    return;
                }
                if (!this.reStudent.student.name) {
                    this.$message.error('请输入用户名');
                    return;
                }
                if (!this.reStudent.password1) {
                    this.$message.error('请输入密码');
                    return;
                }
                if (this.reStudent.password1.length < 6) {
                    this.$message.error('密码至少6位');
                    return;
                }
                if (!this.reStudent.password2) {
                    this.$message.error('请再一次输入密码');
                    return;
                }
                if (this.reStudent.password2 != this.reStudent.password1) {
                    this.$message.error('密码不一致');
                    return;
                }
                if (this.reStudent.student.prodessionalid == 0) {
                    this.$message.error('请输入专业编号');
                    return;
                }
                if (!this.reStudent.student.phonenumber) {
                    this.$message.error('请输入联系方式');
                    return;
                }
                let that = this
                this.$axios.post(
                    '/student/addOne', that.reStudent
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.info = response.data
                        /*if (that.info.returnKey === true) {

                        } else {

                        }*/
                    }
                )
            },
            resetForm() {
                this.reStudent.resetFields();
            },
            goBack() {
                console.log('go back');
            }
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
</style>

