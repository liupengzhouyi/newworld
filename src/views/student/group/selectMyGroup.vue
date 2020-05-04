<template>
    <div class="selectMyGroup">
        <div class="myTop">
            <el-page-header @back="goBack" content="我的讨论组"></el-page-header>
        </div>
        <!--<div>
            {{ info }}
        </div>
        <div>
            {{ returnObject }}
        </div>-->
        <div>
            <el-container style="height: 100%; border: 1px solid #eee">
                <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                    <el-menu>
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>我的群组</template>
                            <el-menu-item-group>
                                <el-menu-item v-for="item in returnObject" :key="item.id">
                                    <el-button type="success" @click="selectOnSubmit(item)">
                                        {{ item.name }}
                                    </el-button>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <el-container>
                    <el-header style="text-align: right; font-size: 12px">
                        <el-dropdown>
                            <i class="el-icon-setting" style="margin-right: 15px"></i>
                        </el-dropdown>
                        <span>{{ this.$route.params.name001 }}</span>
                    </el-header>

                    <el-main>
                        <div class="lpMyWay">
                            <div>
                                <el-card class="box-card">

                                    <TestSay :groupid="this.chatGroupid" :groupName="groupName" v-if="isRouterAlive"></TestSay>
                                    <el-form>
                                        <el-row>
                                            <el-input v-model="information" placeholder="请输入内容" style="width: 410px" clearable></el-input>
                                            <el-button type="primary" @click="onSubmit" :disabled="bottonKey">发送</el-button>
                                        </el-row>
                                    </el-form>
                                </el-card>
                            </div>
                        </div>
                    </el-main>
                </el-container>
            </el-container>
        </div>
        <!--<div>
            {{ info3 }}
        </div>
        <div>
            {{ returnObject3 }}
        </div>-->
    </div>
</template>

<script>
    import TestSay from "../../../components/chat/testSay";
    export default {
        name: "selectMyGroup",
        components: {TestSay},
        data() {
            return {
                info: null,
                returnObject: null,
                info3: null,
                returnObject3: null,
                chatGroupid: null,
                groupName: null,
                information: "",
                bottonKey: false,
                groupid: 0,
                authorId: this.$GLOBAL.userNumber,
                isRouterAlive: true,
            }
        },
        created() {
            let that = this
            this.$axios.post(
                '/OtherContrller/studentGetMyGroup',
                {
                    "id": 0,
                    "imageurl": "",
                    "isdelete": 0,
                    "name": "",
                    "password": 0,
                    "phonenumber": "",
                    "prodessionalid": 0,
                    "studentid": this.$GLOBAL.userNumber,
                }
            ).then(
                async function (response) {
                    console.log(response);
                    console.log(response.data);
                    that.info = response.data;
                    that.returnObject = that.info.returnObject;
                }
            );
        },
        methods: {
            selectOnSubmit(item) {
                this.groupid = item.id
                this.chatGroupid = item.id
                this.groupName = item.name
                this.reload()
            },
            reload() {
                this.isRouterAlive = false
                this.$nextTick(() => (this.isRouterAlive = true))
            },
            onSubmit() {
                let that = this
                if (that.information.length === 0) {
                    this.$message.error('请输入你的聊天数据');
                    return;
                }
                this.$axios.post(
                    '/chat/add',
                    {
                        "authorid": that.authorId,
                        "day": 0,
                        "groupid": this.groupid,
                        "hour": 0,
                        "id": 0,
                        "information": that.information.toString(),
                        "moment": 0,
                        "month": 0,
                        "second": 0,
                        "type": that.$GLOBAL.userType,
                        "year": 0
                    },
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.info3 = response.data;
                        that.returnObject3 = that.info3.returnObject;
                        if (that.info3.returnKey === true) {
                            that.information = "";
                        }
                    }
                );
                this.reload();
            },
            goBack() {
                this.$router.push({path: '/StudentMain',})
            },
        },
    }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
    .lpMyWay {
        width: 480px;
        height: 100%;
        margin: 0 auto;
        align-items: center;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
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
        width: 600px;
        height: 700px;
    }
</style>