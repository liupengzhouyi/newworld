<template>
    <div class="titleApplicationInformation">

        <div class="myTop">
            <el-page-header @back="goBack" content="题目申请信息"></el-page-header>
        </div>
        <div class="lpMyWay">
            <el-table :data="returnObject" border style="width: 100%">
                <el-table-column prop="titleid" label="题目名称" width="230">
                    <template slot-scope="scope">
                        《{{ scope.row.project.title }}》
                    </template>
                </el-table-column>
                <el-table-column label="学生姓名" width="100">
                    <template slot-scope="scope">
                        {{ scope.row.student.name }}
                    </template>
                </el-table-column>
                <el-table-column label="学生学号" width="120">
                    <template slot-scope="scope">
                        {{ scope.row.student.studentid }}
                    </template>
                </el-table-column>
                <el-table-column prop="applicationdata" label="申请日期" width="180">
                    <template slot-scope="scope">
                        {{ scope.row.selecttitle.applicationdata }}
                    </template>
                </el-table-column>
                <el-table-column label="通过" width="140">
                    <template slot-scope="scope">
                        <el-popover placement="top" width="120" v-model="visible" align="center">
                            <p>确定通过申请吗？</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="passApplication(scope.row)">确定</el-button>
                            </div>
                            <el-button size="mini" type="success" slot="reference" :disabled="returnIsSelect()" round>通过申请</el-button>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="passdata" label="不通过" width="140">
                    <template slot-scope="scope">
                        <el-popover placement="top" width="120" v-model="visible" align="center">
                            <p>确定不通过该申请吗？</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="notPassApplication(scope.row)">确定</el-button>
                            </div>
                            <!-- :disabled="returnIsSelect()" -->
                            <el-button size="mini" type="danger" slot="reference" :disabled="returnIsSelect()" round>不通过申请</el-button>
                        </el-popover>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!--<div>
            <p>
                {{ returnObject }}
            </p>
        </div>-->
        <!--<div>
            <h1>
                {{ thatIsSelect }}
            </h1>
        </div>-->
        <div>
            <h1>
                {{ passInfo }}
            </h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "titleApplicationInformation",
        data() {
            return {
                title: "题目申请信息",
                titleId: this.$route.params.id,
                info: null,
                returnObject: null,
                passInfo: null,
                thatIsSelect: this.$route.params.isSelect,
            }
        },
        created() {
            let that = this;
            that.$axios.post(
                '/OtherContrller/selectApplicationTitleInformationByTitle', {
                    "applicationdata": "",
                    "id": 0,
                    "pass": 0,
                    "passdata": "",
                    "studentid": 0,
                    "titleid": that.titleId
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
                if (this.$GLOBAL.userType === 2) {
                    this.$router.push(
                        {
                            name: 'ShowMyTitle',
                            params: {
                            }
                        }
                    )
                } else {
                    this.$router.push({path: '/TeacherTitle',})
                }
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
        width: 63%;
        margin-left: auto;
        margin-right: auto;
    }
</style>