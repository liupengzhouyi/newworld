<template>
    <div class="studentInformationAir">
        <div class="myTop">
            <el-page-header @back="goBack" content="我的信息"></el-page-header>
        </div>
        <div style="padding: 20px 0"></div>
        <div class="lpMyWay">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="我的信息" name="1">
                    <el-card class="box-card">
                        <div>
                            <div class="demo-basic--circle">
                                <div class="block">
                                    <el-avatar :size="100" :src="returnObject.student.imageurl" fit="fill"></el-avatar>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <table id="customers">
                            <tr class="alt">
                                <th>姓名</th>
                                <td>{{ returnObject.student.name }}</td>
                            </tr>
                            <tr>
                                <th>学号</th>
                                <td>{{ returnObject.student.studentid }}</td>
                            </tr>
                            <tr class="alt">
                                <th>联系方式</th>
                                <td> {{ returnObject.student.phonenumber }}</td>
                            </tr>
                        </table>
                    </el-card>
                </el-collapse-item>
                <el-collapse-item title="题目信息" name="2">
                    <div>
                        <el-card class="box-card">
                            <h1>
                                没有！
                            </h1>
                        </el-card>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="选题通过信息" name="3" style="align-items: center">
                    <div>
                        <el-card class="box-card">
                            <div>
                                <h1>
                                    没有！！
                                </h1>
                            </div>
                        </el-card>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="导师信息" name="4">
                    <div>
                        <el-card class="box-card">
                            <div>
                                <h1>
                                    没有！！!
                                </h1>
                            </div>
                        </el-card>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
    export default {
        name: "studentInformationAir",
        data() {
            return {
                activeNames: ['1'],
                info: null,
                returnObject: null,

            };
        },
        created() {
            let that = this
            this.$axios.post(
                '/OtherContrller/selectMyTitle',
                {
                    "id": 0,
                    "imageurl": "",
                    "isdelete": 0,
                    "name": "",
                    "password": 0,
                    "phonenumber": "",
                    "prodessionalid": 0,
                    "studentid": that.$GLOBAL.userNumber
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
                this.$router.push({path: '/StudentMain',})
            },
            download(path) {
                return path
            },
            myPaperInformation(titleId) {
                this.$router.push(
                    {
                        name: 'GetTruePaperFile',
                        params: {
                            titleId: titleId
                        }
                    }
                )
            },
            handleChange(val) {
                console.log(val);
            },
        },
    }
</script>

<style scoped>
    .lpMyWay {
        width: 900px;
        margin: 0 auto;
        background-color: yellowgreen;
        align-items: center;
    }
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 800px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
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
</style>