<template>
    <div class="getHistoryFile">

        <div class="myTop">
            <el-page-header @back="goBack" content="论文文件历史记录"></el-page-header>
        </div>
        <div style="padding: 20px 0"></div>

        <!--<div>
            {{ titleId }}
            {{ name }}
        </div>-->

        <div class="lpMyWay">
            <div style="padding: 20px 0"></div>
            <div class="block">
                <el-timeline style="width: 800px" reverse="false">
                    <el-timeline-item
                            v-for="(temp, index) in returnObject"
                            :key="index"
                            color=#ff0000
                            type="success"
                            :timestamp="temp.upladdata"
                            placement="top"
                            icon="el-icon-download"
                            size="large"
                    >
                        <el-card>
                            <el-container>
                                <el-container>
                                    <el-aside width="500px" align="left">
                                        <h2 style="color: dodgerblue">{{ temp.name }}</h2>
                                        <p>
                                            {{ temp.introduction }}
                                        </p>
                                        <p><b>版本：{{ temp.version }}</b>  </p>
                                    </el-aside>
                                    <el-container width="300px">
                                        <el-main style="width: 100px">
                                            <el-row>
                                                <a :href="download(temp.fileurl)">
                                                    <el-button type="success" icon="el-icon-download" circle></el-button>
                                                </a>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <a></a>
                                                <el-button type="info" icon="el-icon-info" @click="getApproval(temp)" circle></el-button>

                                                <el-dialog :title="tempname" :visible.sync="outerVisible">
                                                    <div class="myLeft">
                                                        <h3>
                                                            导师指导意见：
                                                        </h3>
                                                    </div>
                                                    <div>
                                                        <p style="size: 20px">
                                                            {{ approval }}
                                                        </p>
                                                    </div>
                                                    <div slot="footer" class="dialog-footer">
                                                        <el-button type="primary" @click="outerVisible = false">确定</el-button>
                                                        <!--<el-button type="primary" @click="innerVisible = true">打开</el-button>-->
                                                    </div>
                                                </el-dialog>
                                            </el-row>
                                        </el-main>

                                    </el-container>
                                </el-container>
                            </el-container>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
        <!--<div>
            {{ returnId }}
        </div>-->
        <!--<div>
            {{ returnObject }}
        </div>-->

    </div>
</template>

<script>
    export default {
        name: "getHistoryFile",
        data() {
            return {
                returnId: this.$route.params.id,
                title: "查看论文文件",
                titleId: this.$route.params.titleId,
                name: this.$route.params.name,
                info: null,
                returnObject: null,
                info2: null,
                returnObject2: null,
                outerVisible: false,
                //innerVisible: false,
                tempname: null,
                approval: "导师暂时未指导",

            }
        },
        created () {
            let that = this
            this.$axios.post(
                '/projectfile/getAllByTitleIdAndNameFalse',
                {
                    "approval": "",
                    "approvaldata": "",
                    "fileurl": "",
                    "id": 0,
                    "introduction": "",
                    "name": that.name,
                    "studentnumber": "",
                    "teachernumber": "",
                    "titleid": that.titleId,
                    "upladdata": "",
                    "version": "",
                    "versionkey": 0
                }
            ).then(
                async function (response) {
                    console.log(response);
                    console.log(response.data);
                    that.info = response.data;
                    that.returnObject = that.info.returnObject;
                }
            )
        },
        methods: {
            goBack() {
                this.$router.push(
                    {
                        name: 'GetTruePaperFile',
                        params: {
                            titleId: this.$route.params.id
                        }
                    }
                )
            },
            download(path) {
                return path
            },
            getApproval(temp) {
                let that = this
                this.$axios.post(
                    '/projectfile/selectByID',
                    {
                        "approval": "",
                        "approvaldata": "",
                        "fileurl": "",
                        "id": temp.id,
                        "introduction": "",
                        "name": "",
                        "studentnumber": "",
                        "teachernumber": "",
                        "titleid": 0,
                        "upladdata": "",
                        "version": "",
                        "versionkey": 0
                    }
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.info2 = response.data;
                        that.returnObject2 = that.info2.returnObject;
                        that.tempname = that.returnObject2.name;
                        that.approval = that.returnObject2.approval;
                    }
                );
                that.outerVisible = true
            },
            /*setApproval(text) {
                if (text.toString().length === 0) {
                    return "导师暂时未指导"
                } else {
                    return text.toString();
                }
            },*/
        }
    }
</script>

<style scoped>
    .lpMyWay {
        width: 900px;
        margin: 0 auto;
        background-color:white;
        box-shadow:0 5px 20px #999;
        align-items: center;
        background-color: #56793e;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        text-align: left;
        height: 140px;
    }

    .el-main {
        text-align: center;
        line-height: 100px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .myLeft {
        text-align: left;
    }
</style>