<template>
    <div class="groupInformation">
        <div class="myTop">
            <el-page-header @back="goBack" content="聊天群组"></el-page-header>
        </div>
        <div class="lpMyWay">
            <div>
                <el-row>
                    <el-button @click="drawer1 = true" type="primary" icon="el-icon-s-custom" style="margin-left: 16px;" circle></el-button>
                    <el-button @click="drawer = true" type="primary" icon="el-icon-notebook-2" style="margin-left: 16px;" circle></el-button>
                </el-row>
            </div>
            <Chat :groupid="groupid" :groupName1="groupName2" v-if="isRouterAlive"></Chat>
        </div>
        <!--<div>
            {{ groupid }}
        </div>-->
        <div style="padding: 20px 0"></div>
        <el-drawer title="聊天群组" :visible.sync="drawer" :with-header="false">
            <div class="lpMyWay">
                <el-card class="box-card">
                    <ul>
                        <li v-for="item in returnObject" :key="item.index" style="list-style-type: none; width: 360px">
                            <el-card class="interbox-card">
                                <el-row style="height: 40px">
                                    <el-col :span="5">
                                        <div class="grid-content bg-purple">
                                            <el-avatar :size="size" :src="item.imageurl"></el-avatar>
                                        </div>
                                    </el-col>
                                    <el-col :span="10">
                                        <div class="grid-content bg-purple-light">
                                            <el-button type="text" @click="selectGroupNumber(item)">
                                                <h4 style="color: #c9c92d">
                                                    {{ item.name }}
                                                </h4>
                                            </el-button>
                                        </div>
                                    </el-col>
                                </el-row>
                            </el-card>
                            <div style="padding: 4px 0"></div>
                        </li>
                    </ul>
                </el-card>
            </div>
        </el-drawer>

        <el-drawer title="群组成员" :visible.sync="drawer1" :with-header="false" direction="ltr">
            <div class="lpMyWay">
                <el-card class="box-card">
                    <ul>
                        <li v-for="item in returnObject1" :key="item.index" style="list-style-type: none; width: 360px">
                            <el-card class="interbox-card">
                                <el-row style="height: 40px">
                                    <el-col :span="5">
                                        <div class="grid-content bg-purple">
                                            <el-avatar :size="size" :src="item.imageurl"></el-avatar>
                                        </div>
                                    </el-col>
                                    <el-col :span="10">
                                        <div class="grid-content bg-purple-light">
                                            <h4 style="color: ivory">
                                                {{ item.name }}
                                            </h4>
                                        </div>
                                    </el-col>
                                </el-row>
                            </el-card>
                            <div style="padding: 4px 0"></div>
                        </li>
                    </ul>
                    <ul>
                        <li style="list-style-type: none; width: 360px">
                            <el-card class="interbox-card">
                                <el-row style="height: 40px">
                                    <el-button @click="open()" type="success" icon="el-icon-circle-plus-outline" circle></el-button>
                                </el-row>
                            </el-card>

                        </li>
                    </ul>
                </el-card>
            </div>
        </el-drawer>

    </div>
</template>

<script>
    import Chat from "../chat/chat";
    export default {
        name: "groupInformation",
        components: {Chat},
        data() {
            return {
                title: '创建聊天群组',
                teacherid: 0,
                imageUrl: "",
                name: "",
                info: null,
                returnObject: null,
                info1: null,
                returnObject1: null,
                info2: null,
                returnObject2: null,
                drawer: false,
                drawer1: false,
                groupid: 0,
                groupName2: "",
                isRouterAlive: true
            }
        },
        created() {
            let that = this
            this.$axios.post(
                '/group/getAllByTeacherId',
                {
                    "id": 0,
                    "imageurl": "",
                    "name": "",
                    "teacherid": that.$GLOBAL.userNumber
                },
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
                this.$router.push({path:'/TeacherMain',})
            },
            selectGroupNumber(item) {
                let that = this
                that.groupid = item.id;
                that.groupName2 = item.name;
                this.$axios.post(
                    '/groupnumber/getAllNumber',
                    {
                        "groupid": item.id,
                        "id": 0,
                        "studentid": 0
                    },
                ).then(
                    async function (response) {
                        console.log(response);
                        console.log(response.data);
                        that.info1 = response.data;
                        that.returnObject1 = that.info1.returnObject;
                    }
                );
                this.reload();
            },
            reload() {
                this.isRouterAlive = false
                this.$nextTick(() => (this.isRouterAlive = true))
            },
            open() {
                this.$prompt('请输入成员编号', '添加新成员', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    let that = this
                    this.$axios.post(
                        '/groupnumber/add',
                        {
                            "groupid": that.groupid,
                            "id": 12,
                            "studentid": value
                        }
                    ).then(
                        async function (response) {
                            console.log(response);
                            console.log(response.data);
                            that.info2 = response.data;
                            that.returnObject2 = that.info2.returnObject;
                            if (that.info2.returnKey === true) {
                                this.$message({
                                    type: 'success',
                                    message: '添加成功，成员编号是: ' + value
                                });
                            } else {
                                this.$message({
                                    type: 'info',
                                    message: '添加失败'
                                });
                            }
                        }
                    )

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            }
        }

    }
</script>

<style scoped>
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
        width: 480px;
        height: 100%;
        background-color: #d0b247;
    }
    .interbox-card {
        width: 350px;
        background-color: teal;
    }
</style>