<template>
    <div class="addSystemAD">
        <div class="myTop">
            <el-page-header @back="goBack" content="发布系统公告"></el-page-header>
        </div>
        <div class="lpMyWay">
            <el-card class="box-card, lpMyWay" >
                <div slot="header" class="clearfix">
                    <span>
                        <h2>
                            {{ title }}
                        </h2>
                    </span>
                </div>
                <el-input
                        type="text"
                        placeholder="请输入系统公告标题"
                        v-model="text"
                        maxlength="45"
                        show-word-limit
                >
                </el-input>
                <div style="margin: 20px 0;"></div>
                <el-input type="textarea" placeholder="请输入系统公告内容"
                        v-model="textarea"
                        maxlength="1000"
                        show-word-limit
                >
                </el-input>
                <div style="padding: 20px 0">
                    <el-row>
                        <el-button type="warning" @click="reset" round>重置</el-button>
                        <el-button type="primary" @click="addit" round>提交</el-button>
                    </el-row>
                </div>
            </el-card>
        </div>
        <div>
            {{ info }}
        </div>

    </div>
</template>

<script>
    export default {
        name: "addSystemAD",
        data() {
            return {
                title: "添加系统公告",
                text: '',
                textarea: '',
                info: null,

            }
        },
        created () {
        },
        methods: {
            goBack() {
                this.$router.push({path:'/',})
            },
            addit() {
                if (!this.text) {
                    this.$message.error('请输入标题');
                    return;
                }
                if (!this.textarea) {
                    this.$message.error('请输入内容');
                    return;
                }
                if (this.text === '' || this.textarea === '') {
                    alert('标题或内容不能为空');
                } else {
                    let that = this
                    this.$axios.post(
                        '/SystemInformation/add',
                        {
                            "authorid": that.$GLOBAL.userID,
                            "id": 0,
                            "lpcontent": that.textarea,
                            "lpday": 0,
                            "lpmonth": 0,
                            "lpyear": 0,
                            "title": that.text
                        },
                    ).then(
                        async function (response) {
                            console.log(response);
                            console.log(response.data);
                            that.info = response.data;
                        }
                    )
                }
            },
            reset() {
                let that = this;
                that.test = "";
                that.textarea = "";
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

    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
</style>