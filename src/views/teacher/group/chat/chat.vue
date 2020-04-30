<template>
    <div class="chat">
        <div class="lpMyWay">
            <div>
                <el-card class="box-card">
                    <TestSay></TestSay>
                </el-card>
            </div>
            <el-form>
                <el-form-item>
                    <el-input type="textarea" v-model="information"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="information = ''">取消</el-button>
                    <el-button type="primary" @click="onSubmit" :disabled="bottonKey">发送</el-button>
                </el-form-item>
            </el-form>
        </div>
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
        data() {
            return {
                information: "",
                info3: null,
                returnObject3: null,
                bottonKey: false,
                authorId: this.$GLOBAL.userNumber,
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
                        "groupid": 12,
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
                )
            }
        }
    }
</script>

<style scoped>
    .lpMyWay {
        width: 600px;
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
        height: 600px;
    }
</style>