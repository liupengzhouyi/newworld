<template>
    <div class="titleApplication">
        <div class="myTop">
            <el-page-header @back="goBack" content="题目申请信息"></el-page-header>
        </div>
        <div>
            <h1>
                {{ title }}
            </h1>
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
                <el-table-column label="是否通过" width="100">
                    <template slot-scope="scope">
                        {{ getPass(scope.row) }}
                    </template>
                </el-table-column>
                <el-table-column prop="passdata" label="通过日期" width="180"></el-table-column>
            </el-table>
        </div>
        <!--<div>
            {{ info }}
        </div>
        <div>
            {{ returnObject }}
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "titleApplication",
        data() {
            return {
                title: "题目申请信息",
                titleId: this.$route.params.id,
                info: null,
                returnObject: null,
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
                this.$router.push(
                    {
                        name: 'TeacherTitle',
                        params: {
                            teachernumber: this.$route.params.teachernumber,
                            id: 3,
                        }
                    }
                )
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