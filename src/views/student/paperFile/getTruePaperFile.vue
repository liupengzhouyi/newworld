<template>
    <div class="getTruePaperFile">
        <div class="myTop">
            <el-page-header @back="goBack" content="查看论文文件"></el-page-header>
        </div>
        <div style="padding: 20px 0"></div>

        <div class="lpMyWay">
            <div style="padding: 20px 0"></div>
            <el-main>
                <el-button type="primary" @click="add()" size="medium" icon="el-icon-edit" circle></el-button>
            </el-main>
            <div class="block">
                <el-timeline style="width: 800px" reverse="false">
                    <el-timeline-item
                            v-for="(temp, index) in returnObject"
                            :key="index"
                            color=#ff0000
                            type="success"
                            :timestamp="temp.upladdata"
                            placement="top"
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
                                                <a>
                                                    <el-button type="danger" icon="el-icon-refresh" circle></el-button>
                                                </a>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <a>
                                                    <el-button type="warning" icon="el-icon-time" @click="history(temp)" circle></el-button>
                                                </a>
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



        <div>
            {{ returnObject }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "getTruePaperFile",
        data() {
            return {
                title: "查看论文文件",
                id: this.$route.params.titileId,
                info: null,
                returnObject: null,
            }
        },
        created () {
            let that = this
            this.$axios.post(
                '/projectfile/getAllByTiitleIdTrue',
                {
                    "approval": "",
                    "approvaldata": "",
                    "fileurl": "",
                    "id": 0,
                    "introduction": "",
                    "name": "",
                    "studentnumber": "",
                    "teachernumber": "",
                    "titleid": 22,
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
                this.$router.push({path:'/',})
            },
            download(path) {
                return path
            },
            history(temp) {
                this.$router.push(
                    {
                        name: 'GetHistoryFile',
                        params: {
                            titleId: temp.titleid,
                            name: temp.name,
                        }
                    }
                )
            },
            add() {
                this.$router.push(
                    {
                        name: 'AddPaperFile',
                        params: {

                        }
                    }
                )
            }

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
        background-color: #5ab1aa;

    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        text-align: left;
        height: 150px;
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
</style>