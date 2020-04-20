<template>
    <div class="teacherTitle">
        <div class="myTop">
            <el-page-header @back="goBack" content="教师信息"></el-page-header>
        </div>
        <div>
            <h1>
                {{ title }}
            </h1>
        </div>
        <div class="lpMyWay">
            <el-table
                    :data="returnObject"
                    border
                    style="width: 100%">
                <el-table-column label="教师编号" width="100" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.teacherid }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="题目" width="150" >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.title }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="描述文件" width="150" align="center">
                    <template slot-scope="scope">
                        <a :href="download(scope.row.fileurl)">
                            <span style="margin-left: 10px">{{ scope.row.title }}</span>
                        </a>
                    </template>
                </el-table-column>
                <el-table-column label="是否被选" width="100" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">
                            {{ isSelect(scope.row.isselect) }}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column label="选题学生" width="150" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.studentnumber }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="申请" width="110" align="center">
                    <template slot-scope="scope">
                        <el-popover placement="top" width="160" v-model="visible">
                            <p><b>确定要申请该题目吗？</b></p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="doApplication(scope.row)">确定</el-button>
                            </div>
                            <el-button size="mini" type="primary" slot="reference" :disabled=lpDelete(scope.row.isselect)>申请</el-button>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="查看申请" width="110" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="toPages(scope.row)" :disabled=lpDelete(scope.row.isselect)>
                            查看申请
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column label="取消申请" width="110" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" :disabled="lpApplication(scope.row.isselect)">
                            取消申请
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column label="重新选题" width="110">
                    <template slot-scope="scope">
                        <el-button size="mini" type="warning" @click="handleDelete(scope.$index, scope.row)" :disabled="lpReselect(scope.row.isselect)">
                            重新选题
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!--<div>
            {{ info }}
        </div>
        <div>
            {{ returnObject }}
        </div>
        <div>
            <h1>
                {{ temp }}
            </h1>
        </div>-->

    </div>
</template>

<script>
    export default {
        name: "teacherTitle",
        data() {
            return {
                title: "选题列表",
                teachernumber: this.$route.params.teachernumber,
                info: null,
                returnObject: null,
                temp: null,
            }
        },
        created() {
            let that = this;
            this.$axios.post(
                '/project/getAllByTeacherId', {
                    "fileurl": "",
                    "id": 0,
                    "isselect": 0,
                    "studentnumber": "",
                    "teacherid": that.teachernumber,
                    "title": ""
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
            doApplication(row) {
                let that = this;
                this.$axios.post(
                    '/selecttitle/add', {
                        "applicationdata": "",
                        "id": 0,
                        "pass": 0,
                        "passdata": "",
                        "studentid": that.$GLOBAL.userNumber,
                        "titleid": row.id
                    },
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.temp = response.data;
                        if (that.temp.returnKey === true) {
                            that.$notify({
                                title: '成功',
                                message: that.temp.why,
                                type: 'success'
                            });
                        } else {
                            that.$notify.error({
                                title: '错误',
                                message: that.temp.why,
                            });
                        }
                    }
                )
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            download(path) {
                return path
            },
            isSelect(key) {
                if (key == 0) {
                    return '未选题'
                } else {
                    return '已选题'
                }
            },
            lpDelete(key) {
                if (key == 0) {
                    return false;
                } else {
                    return true;
                }
            },
            lpApplication(key) {
                if (key == 0) {
                    return false;
                } else {
                    return true;
                }
            },
            lpReselect(key) {
                if (key == 0) {
                    return true;
                } else {
                    return false;
                }
            },
            lpInfo(key) {
                if (key == 0) {
                    return true;
                } else {
                    return false;
                }
            },
            goBack() {
                if (this.$route.params.key == 1) {
                    this.$router.push({path:'/SelectCollegeTeacher',})
                } else {
                    this.$router.push({path:'/SelectProfessionTeacher',})
                }
            },
            toPages(row) {
                this.$router.push(
                    {
                        name: 'TitleApplication',
                        params: {
                            id: row.id,
                            teachernumber: this.$route.params.teachernumber,
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
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
</style>