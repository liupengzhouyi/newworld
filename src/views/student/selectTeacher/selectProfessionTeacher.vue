<template>
    <div class="selectProfessionTeacher">
        <div class="myTop">
            <el-page-header @back="goBack" content="查看专业教师"></el-page-header>
        </div>
        <div>
            <h1>
                {{ title }}
            </h1>
        </div>
        <div class="lpMyWay">
            <el-table
                    :data="teacherList"
                    border
                    style="width: 100%">
                <el-table-column label="专业编号" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.professionalid }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="教师编号" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.teachernumber }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="教师名称" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="联系方式" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.phonenumber }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="toPages(scope.row)">查看教师选题</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!--<div>
            {{ info }}
        </div>
        <div>
            <h4>
                {{ teacherList }}
            </h4>
        </div>
        <div>
            <h1>
                {{ this.$GLOBAL.professionalid }}
            </h1>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "selectProfessionTeacher",
        data() {
            return {
                title: "查看专业教师",
                teacherList: null,
                info: null,

            }
        },
        created() {
            let that = this;
            this.$axios.post(
                '/teacher/getAllByProfessional',
                {
                    "id": 0,
                    "imageurl": "",
                    "isdelete": 0,
                    "name": "",
                    "password": 0,
                    "phonenumber": "",
                    "professionalid": that.$GLOBAL.professionalid,
                    "teachernumber": ""
                }
            ).then(
                async function (response) {
                    console.log(response);
                    console.log(response.data);
                    that.info = response.data;
                    that.teacherList = response.data.returnObject;
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
            toPages(row) {
                this.$router.push(
                    {
                        name: 'TeacherTitle',
                        params: {
                            teachernumber: row.teachernumber,
                            key: 2,
                        }
                    }
                )
            },
            goBack() {
                this.$router.push({path: '/StudentMain',})
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
    .myTop {
        padding: 20px 0;
    }
</style>