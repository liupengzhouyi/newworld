<template>
    <div class="applicationInformation">
        <div class="myTop">
            <el-page-header @back="goBack" content="我的申请信息"></el-page-header>
        </div>
        <div class="myTop">

        </div>
        <div class="lpMyWay">
            <el-table :data="returnObject" border style="width: 100%">
                <el-table-column prop="titleid" label="教师" width="90">
                    <template slot-scope="scope">
                        {{ scope.row.teacher.name }}
                    </template>
                </el-table-column>
                <el-table-column prop="titleid" label="教师编号" width="90">
                    <template slot-scope="scope">
                        {{ scope.row.teacher.teachernumber }}
                    </template>
                </el-table-column>
                <el-table-column prop="titleid" label="题目名称" width="200">
                    <template slot-scope="scope">
                        《{{ scope.row.project.title }}》
                    </template>
                </el-table-column>
                <el-table-column label="详细信息" width="200">
                    <template slot-scope="scope">
                        <a :href="download(scope.row.project.fileurl)">
                            <span style="margin-left: 10px">{{ scope.row.project.title }}</span>
                        </a>
                    </template>
                </el-table-column>
                <el-table-column prop="applicationdata" label="申请日期" width="170">
                    <template slot-scope="scope">
                        {{ scope.row.selecttitle.applicationdata }}
                    </template>
                </el-table-column>
                <el-table-column label="申请状态" width="120">
                    <template slot-scope="scope">
                        <p :style="color =  passColor(scope.row)">{{ doPass(scope.row.selecttitle.pass) }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="applicationdata" label="审批日期" width="170">
                    <template slot-scope="scope">
                        {{ scope.row.selecttitle.passdata }}
                    </template>
                </el-table-column>
                <el-table-column prop="passdata" label="删除申请" width="110">
                    <template slot-scope="scope">
                        <el-popover placement="top" width="100" v-model="visible" align="center">
                            <p>确定不通过该申请吗？</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="notPassApplication(scope.row)">确定</el-button>
                            </div>
                            <!-- :disabled="returnIsSelect()" -->
                            <el-button size="mini" type="danger" slot="reference" :disabled="doDelete(scope.row.selecttitle.pass)" round>删除申请</el-button>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="passdata" label="申请放弃" width="110">
                    <template slot-scope="scope">
                        <el-popover placement="top" width="100" v-model="visible" align="center">
                            <p>确定不通过该申请吗？</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="notPassApplication(scope.row)">确定</el-button>
                            </div>
                            <!-- :disabled="returnIsSelect()" -->
                            <el-button size="mini" type="danger" slot="reference" :disabled="doabandon(scope.row.selecttitle.pass)" round>申请放弃</el-button>
                        </el-popover>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!--<div>
            <h1>
                {{ title }}
            </h1>
        </div>
        <div>
            <p>
                {{ returnObject }}
            </p>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "applicationInformation",
        data() {
            return {
                title: "我的申请信息",
                info: null,
                returnObject: null,
                temp: null,
            }
        },
        created() {
            let that = this;
            this.$axios.post(
                '/OtherContrller/selectStudentApplication', {
                    "id": 0,
                    "imageurl": "",
                    "isdelete": 0,
                    "name": "",
                    "password": 0,
                    "phonenumber": "",
                    "prodessionalid": 0,
                    "studentid": that.$GLOBAL.userNumber
                },
            ).then(
                async function (response) {
                    console.log(response);
                    console.log(response.data);
                    that.info = response.data;
                    that.returnObject = response.data.returnObject;
                }
            )
        },
        methods: {
            doPass(key) {
                if (key == 0) {
                    return '#ffde09'
                } else if (key == 1) {
                    return "申请通过"
                } else if (key == -1) {
                    return "申请未通过"
                } else {
                    return "未知";
                }
            },
            doDelete(key) {
                if (key == 0) {
                    return false;
                } else if (key == 1) {
                    return true;
                } else if (key == -1) {
                    return true;
                } else {
                    return true;
                }
            },
            doabandon(key) {
                if (key == 0) {
                    return true;
                } else if (key == 1) {
                    return false;
                } else if (key == -1) {
                    return true;
                } else {
                    return true;
                }
            },
            download(path) {
                return path
            },
            passColor(row) {
                let key = row.selecttitle.pass
                if (key == 0) {
                    return '#020202';
                } else if (key == 1) {
                    return '#0fe306';
                } else if (key == -1) {
                    return '#d71c38';
                } else {
                    return '#020202';
                }
            },
            getPass(row) {
                let pass = row.selecttitle.pass
                var key = "";
                if (pass === 0) {
                    key = "未处理"
                } else if (pass === 1){
                    key = "通过"
                } else if (pass === -1){
                    key = "不通过"
                }
                return key;
            },
            goBack() {
                this.$router.push({path: '/',})
            },
            returnIsSelect() {
                if (this.$route.params.isSelect === 1) {
                    return true;
                } else {
                    return false;
                }
            },
            passApplication(row) {
                let that = this;
                that.$axios.post(
                    '/selecttitle/pass',
                    {
                        "applicationdata": "",
                        "id": row.selecttitle.id,
                        "pass": 0,
                        "passdata": "",
                        "studentid": 0,
                        "titleid": 0
                    },
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.passInfo = response.data;
                    }
                )
            },
            notPassApplication(row) {
                let that = this;
                that.$axios.post(
                    '/OtherContrller/selectApplicationTitleInformationByTitle', {
                        "applicationdata": "",
                        "id": 0,
                        "pass": 0,
                        "passdata": "",
                        "studentid": 0,
                        "titleid": row.selecttitle.titleid
                    },
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.passInfo = response.data;
                    }
                )
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
        }
    }
</script>

<style scoped>
    .lpMyWay {
        align-items: center;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    .myTop {
        padding: 20px 0;
    }
</style>