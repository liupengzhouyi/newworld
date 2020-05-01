<template>
    <div class="chat">
        <div class="lpMyWay">
            <div>
                <el-card class="box-card">

                    <TestSay :groupid="chatGroupid" :groupName="groupName" v-if="isRouterAlive"></TestSay>
                    <el-form>
                        <el-row>
                            <el-input v-model="information" placeholder="请输入内容" style="width: 410px" clearable></el-input>
                            <el-button type="primary" @click="onSubmit" :disabled="bottonKey">发送</el-button>
                        </el-row>
                    </el-form>
                </el-card>
            </div>
        </div>
        <!--<div>
            {{ groupid }} ____ {{ chatGroupid }}
        </div>-->
        <!--<div>
            {{ info3 }}
        </div>
        <div>
            {{ authorId }}
        </div>-->
    </div>
</template>

<script>
    import TestSay from "../../../../components/chat/testSay";
    export default {
        name: "chat",
        components: {TestSay},
        props: ['groupid', 'groupName1'],
        data() {
            return {
                information: "",
                info3: null,
                returnObject3: null,
                bottonKey: false,
                authorId: this.$GLOBAL.userNumber,
                chatGroupid: this.groupid,
                groupName: this.groupName1,
                isRouterAlive: true
            }
        },
        created() {
            if (this.authorId.toString().length < 3) {
                this.bottonKey = true;
            } else {
                this.bottonKey = false;
            }
        },
        methods: {
            goBack() {
                this.$router.push({path:'/',})
            },
            onSubmit() {
                let that = this
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
                    }
                );
                this.reload();
            },
            reload() {
                this.isRouterAlive = false
                this.$nextTick(() => (this.isRouterAlive = true))
            },
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
        width: 600px;
        height: 700px;
    }
</style>