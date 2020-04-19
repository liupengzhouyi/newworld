<template>
    <div class="deleteTitle">
        <div class="myTop">
            <el-page-header @back="goBack" content="教师删除选题"></el-page-header>
        </div>
        <div class="lpMyWay">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>
                        <div>
                            <h2>
                                {{ title }}
                            </h2>
                        </div>
                    </span>
                </div>
                <div>
                    <table id="customers">
                        <tr class="alt">
                            <td width="30%">
                                <h4>
                                    教师编号
                                </h4>
                            </td>
                            <td width="70%">
                                {{ returnObject.teacherid}}
                            </td>
                        </tr>
                        <tr>
                            <td width="30%">
                                <h4>
                                    题目名称
                                </h4>
                            </td>
                            <td width="70%">
                                <b>
                                    {{ returnObject.title }}
                                </b>
                            </td>
                        </tr>
                        <tr class="alt">
                            <td width="30%">
                                <h4>

                                    详细文件下载
                                </h4>
                            </td>
                            <td width="70%">
                                <div>

                                    <a :href="download(returnObject.fileurl)">
                                        <span style="margin-left: 10px">{{ returnObject.title }}</span>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div style="padding: 30px ">

                    </div>
                    <div>
                        <el-button type="primary" round @click="goBack">取消</el-button>
                        <el-popover placement="top" width="360" v-model="visible">
                            <p>{{ end }}</p>
                            <el-button slot="reference" type="danger" round @click="lpDelete">删除</el-button>
                        </el-popover>
                    </div>
                </div>
            </el-card>
        </div>
        <!--<div>
            <h2>
                ID : {{ id }}
            </h2>
        </div>
        <div>
            <p>{{ deleteInfo }}</p>
        </div>
        <div>
            {{ info }}
        </div>
        <div>
            {{ returnObject }}
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "deleteTitle",
        data() {
            return {
                title: "删除选题",
                id: this.$route.params.id,
                info: null,
                returnObject: null,
                deleteInfo: null,
                end: "",
            }
        },
        created() {
            let that = this;
            this.$axios.post(
                '/project/selectOne', {
                    "fileurl": "",
                    "id": that.id,
                    "isselect": 0,
                    "studentnumber": "",
                    "teacherid": 0,
                    "title": ""
                }
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
            download(path) {
                return path
            },
            goBack() {
                this.$router.push({path:'/ShowMyTitle',})
            },
            lpDelete() {
                let that = this;
                this.$axios.post(
                    '/project/delete', {
                        "fileurl": "",
                        "id": that.id,
                        "isselect": 0,
                        "studentnumber": "",
                        "teacherid": that.$GLOBAL.userNumber,
                        "title": ""
                    }
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.deleteInfo = response.data;
                        if (that.deleteInfo.returnKey) {
                            that.end = "删除成功";
                        } else {
                            that.end = "删除失败";
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
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
    }
    #customers
    {
        font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
        width:100%;
        border-collapse:collapse;
    }
    #customers td, #customers th
    {
        font-size:1em;
        border:1px solid #98bf21;
        padding:3px 7px 2px 7px;
    }
    #customers th
    {
        font-size:1.1em;
        text-align:left;
        padding-top:5px;
        padding-bottom:4px;
        background-color:#A7C942;
        color:#ffffff;
    }
    #customers tr.alt td
    {
        color:#000000;
        background-color:#EAF2D3;
    }
    .myTop{
        padding: 0.5%;
    }

</style>