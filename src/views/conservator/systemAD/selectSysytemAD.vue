<template>
    <div class="selectSysytemAD">
        <div class="myTop">
            <el-page-header @back="goBack" content="查看系统公告"></el-page-header>
        </div>
        <div style="padding: 20px 0"></div>
        <div class="lpMyWay">
            <div style="padding: 20px 0"></div>
            <div class="block">
                <el-timeline style="width: 700px">
                    <el-timeline-item
                            v-for="(temp, index) in returnobject"
                            :key="index"
                            color=#ff0000
                            type="success"
                    >
                        <el-card align="left">
                            <h2>{{ temp.title }}</h2>
                            <b> 发布于 {{ temp.lpyear}}/{{ temp.lpmonth}}/{{ temp.lpday}} </b>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>



        <!--<div>
            {{ returnobject }}
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "selectSysytemAD",
        data() {
            return {
                title: "添加系统公告",
                text: '',
                textarea: '',
                info: null,
                returnobject: null,


            }
        },
        created () {
            let that = this
            this.$axios.post(
                '/SystemInformation/getAll',
            ).then(
                async function (response) {
                    console.log(response);
                    console.log(response.data);
                    that.info = response.data;
                    that.returnobject = that.info.returnObject;
                }
            )
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
        background-color: #2fe364;

    }
</style>