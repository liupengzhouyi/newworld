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
                        <el-button type="warning" round>警告按钮</el-button>
                        <el-button type="primary" round>主要按钮</el-button>
                    </el-row>
                </div>
            </el-card>
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
                textarea: ''
            }
        },
        created () {
        },
        methods: {
            goBack() {
                this.$router.push({path:'/',})
            },
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