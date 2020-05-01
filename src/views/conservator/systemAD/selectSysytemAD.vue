<template>
    <div class="selectSysytemAD">
        <div class="myTop">
            <el-page-header @back="goBack" content="查看系统公告"></el-page-header>
        </div>
        <div style="padding: 20px 0"></div>
        <div class="lpMyWay">
            <div style="padding: 20px 0"></div>
            <div class="block">
                <el-timeline style="width: 700px" reverse="false">
                    <el-timeline-item
                            v-for="(temp, index) in returnobject"
                            :key="index"
                            color=#ff0000
                            type="success"
                    >
                        <el-card>
                            <el-container>
                                <el-container>
                                    <el-aside width="500px" align="left">
                                        <h2 style="color: dodgerblue">{{ temp.title }}</h2>
                                        <p> 发布于 {{ temp.lpyear}}/{{ temp.lpmonth}}/{{ temp.lpday}} </p>
                                    </el-aside>
                                    <el-container>
                                        <el-main>
                                            <el-button type="info" icon="el-icon-message" circle @click="getInformation(temp.id)"></el-button>
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
            {{ returnobject }}
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "selectSysytemAD",
        data() {
            return {
                title: "系统公告",
                info: null,
                returnobject: null,


            }
        },
        created () {
            let that = this
            this.$axios.post(
                '/SystemInformation/getAll',
            ).then(
                async function (response) {
                    console.log(response);
                    console.log(response.data);
                    that.info = response.data;
                    that.returnobject = that.info.returnObject;
                }
            )
        },
        methods: {
            goBack() {
                // this.$router.push({path:'/',})
                this.$router.push({path:'/ConservatorMain',})
            },
            getInformation(id) {
                this.$router.push(
                    {
                        name:'SystemADInformation',
                        params: {
                            id: id,
                        },
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .lpMyWay {
        width: 800px;
        margin: 0 auto;
        background-color:white;
        box-shadow:0 5px 20px #999;
        align-items: center;
        background-color: #a0c95d;

    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        text-align: left;
        height: 100px;
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