<template>
    <div class="showMyTitle">
        <div>
            <h2>
                {{ thisTitle }}
            </h2>
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
                <el-table-column label="删除" width="110" align="center">
                    <template slot-scope="scope">
                        <el-popover placement="top" width="160" v-model="visible">
                            <p>这个毕业设计选题确定删除吗？</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="lpDeleteTitle(scope.row)" :disabled=lpDelete(scope.row.isselect)>确定</el-button>
                            </div>
                            <el-button size="mini" type="danger" slot="reference" :disabled="lpDelete(scope.row.isselect)">删除</el-button>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="查看申请" width="110" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="showApplicationInformation(scope.row)" :disabled="lpApplication(scope.row.isselect)">
                            查看申请
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column label="重新选题" width="110">
                    <template slot-scope="scope">
                        <el-popover placement="top" width="160" v-model="visible">
                            <p>确定重置此选题吗？</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row)">确定</el-button>
                            </div>
                            <el-button size="mini" type="warning" slot="reference" :disabled="lpReselect(scope.row.isselect)">重新选题</el-button>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="完成情况" width="110">
                    <template slot-scope="scope">
                        <el-button size="mini" type="info" @click="getTruePaperInformation(scope.row)" :disabled="lpInfo(scope.row.isselect)">
                            完成情况
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <p>
                {{ info }}
            </p>
        </div>
        <div>
            <p>
                {{ returnObject }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "showMyTitle",
        data() {
            return {
                thisTitle: "我的毕业设计选题",
                info: null,
                returnObject: null,

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
                    "teacherid": that.$GLOBAL.userNumber,
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
                    return false;
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
            lpDeleteTitle(row) {
                this.$router.push(
                    {
                        name: 'DeleteTitle',
                        params: {
                            id: row.id,
                        }
                    }
                )
            },
            showApplicationInformation(row) {
                this.$router.push(
                    {
                        name: 'TitleApplicationInformation',
                        params: {
                            id: row.id,
                            isSelect: row.isselect,
                        }
                    }
                )
            },
            getTruePaperInformation(row) {
                this.$router.push(
                    {
                        name: 'TeacherGetTruePaperInformation',
                        params: {
                            titleId: row.id,
                        }
                    }
                )
            }


        },
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