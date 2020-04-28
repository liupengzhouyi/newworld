<template>
    <div class="createGroup">
        <div class="myTop">
            <el-page-header @back="goBack" content="创建聊天群组"></el-page-header>
        </div>
        <div style="padding: 20px 0"></div>
        <div class="lpMyWay">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <h4>{{ title }}</h4>
                </div>
                <el-form label-width="80px">
                    <el-form-item label="群名称">
                        <el-input v-model="name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="name = ''">重置</el-button>
                        <el-button type="primary" @click="create">创建</el-button>
                    </el-form-item>
                </el-form>
            </el-card>

        </div>
        <div>
            {{ name }}
        </div>
        <div>
            {{ info }}
        </div>
        <div>
            {{ returnObject }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "createGroup",
        data() {
            return {
                title: '创建聊天群组',
                teacherid: 0,
                imageUrl: "",
                name: "",
                info: null,
                returnObject: null,
            }
        },
        methods: {
            create() {
                let that = this
                this.$axios.post(
                    '/group/create',
                    {
                        "id": 0,
                        "imageurl": "",
                        "name": that.name.toString(),
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
            goBack() {
                this.$router.push({path:'/',})
            },
        }
    }
</script>

<style scoped>
    .lpMyWay {
        width: 480px;
        margin: 0 auto;
        box-shadow:0 5px 20px #999;
        align-items: center;
        background-color: #ffffff;
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