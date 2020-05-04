<template>
    <div class="testSay">
        <div class="lpMyWay">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="font-size: xx-large">{{ groupName }}</span>
                    <el-button style="float: right; padding: 3px 0" v-show="showBottonkey111" type="success" icon="el-icon-refresh" circle @click="getMessage"></el-button>
                </div>
                <div>
                    <el-table :data="returnObject" height="500" border="false" style="width: 100%"
                              show-header="true">
                        <el-table-column width="80">
                            <template slot-scope="scope" style="padding: 0">
                                <el-avatar :size="size" :src="scope.row.object.imageurl"></el-avatar>
                                <div>
                                    <p style="color: mediumseagreen" align="center">
                                        <font size="2">
                                            {{ scope.row.object.name }}
                                        </font>
                                    </p>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column width="260">
                            <template slot-scope="scope">
                                <div>
                                    <p style="color: mediumseagreen" align="center">
                                        <font size="2">
                                            {{ scope.row.chat.year }}年{{ scope.row.chat.month }}月{{ scope.row.chat.day }}日
                                            {{ scope.row.chat.hour }}:{{ scope.row.chat.moment }}:{{ scope.row.chat.second }}
                                        </font>
                                    </p>
                                </div>
                                <div class="lpText">
                                    {{ scope.row.chat.information }}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column width="80">
                            <template slot-scope="scope">
                                <el-avatar :size="size" :src="scope.row.object.imageurl"></el-avatar>
                                <div>
                                    <p style="color: mediumseagreen" align="center">
                                        <font size="2">
                                            {{ scope.row.object.name }}
                                        </font>
                                    </p>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div style="padding: 2px"></div>
            </el-card>
        </div>
        <!--<div>
            groupid:{{ groupid }}
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "testSay",
        props: ['groupid', 'groupName'],
        data() {
            return {
                count: 0,
                loading: false,
                totalPages: "",//取后端返回内容的总页数
                list: [], //后端返回的数组
                info: null,
                returnObject: null,
                showBottonkey111: true,
                showBottonkey112: false,
                isRouterAlive: true,
            };
        },
        computed: {
        },
        created() {
            this.getMessage();
            this.count = this.returnObject.size;
        },
        methods: {
            lpIfShow() {

            },
            getMessage() {
                /*this.showBottonkey111 = false;
                this.showBottonkey112 = true;*/
                let that = this;
                this.$axios
                    .post(
                        "/chat/getByGroupID",
                        {
                            "authorid": 0,
                            "day": 0,
                            "groupid": this.groupid,
                            "hour": 0,
                            "id": 0,
                            "information": "",
                            "moment": 0,
                            "month": 0,
                            "second": 0,
                            "type": 0,
                            "year": 0
                        },
                    )
                    .then(response => {
                        console.log(response);
                        console.log(response);
                        console.log(response.data);
                        that.info = response.data;
                        that.returnObject = that.info.returnObject;
                    })
                    .catch(err => {
                        console.log(err);
                    });
                this.showBottonkey111 = setInterval(true, 1000);
                this.showBottonkey112 = false;
            },
        },
    }
</script>

<style scoped>
    #box{
        width: 100%;
        height: 100%;
        position: absolute;
        overflow-y: auto;
    }
    .box {
        width: 100%;
        margin:  0 auto;
    }
    .list {
        padding: 0;
        font-size: 14px;
    }
    .list-item {
        width: 100%;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        list-style: none;
        padding: 0 1rem;
        box-sizing: border-box;
        height: 70px;
        line-height: 70px;
        border-bottom: 1px solid #e7e7e7;
    }
    .loading span {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid #409eff;
        border-left: transparent;
        animation: zhuan 0.5s linear infinite;
        border-radius: 50%;
    }
    @keyframes zhuan {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .box-card {
        width: 480px;
        height: 600px;
    }
    .lpMyWay {
        width: 480px;
        height: 80%;
        margin: 0 auto;
        align-items: center;
    }
    .lpText {
        padding: 5px 5px;
        background-color: lemonchiffon;
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
    }
</style>