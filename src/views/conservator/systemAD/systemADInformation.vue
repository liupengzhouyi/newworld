<template>
    <div class="systemADInformation">
        <div class="myTop">
            <el-page-header @back="goBack" content="系统公告详细信息"></el-page-header>
        </div>

        <div style="padding: 20px 0"></div>

        <div class="lpMyWay">
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix">
                    <h2>
                        {{ returnobject.title }}
                    </h2>
                    <span>
                        <p style="float: right; padding: 3px 0; color: #2154FA">{{ returnobject.lpyear}}/{{ returnobject.lpmonth}}/{{ returnobject.lpday}}</p>
                    </span>
                </div>

                <div>
                    <p style="align-items: center">
                        {{ returnobject.lpcontent }}
                    </p>
                </div>

                <div style="padding: 10px 0"></div>

                <div>
                    <div style="text-align: center; margin: 0">
                        <el-button type="primary" size="mini" :disabled="disabledSee">在看</el-button>
                    </div>
                </div>
            </el-card>

        </div>
        <!--<div>
            {{ returnobject }}
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "systemADInformation",
        data() {
            return {
                title: "系统公告详细内容",
                id: this.$route.params.id,
                info: null,
                returnobject: null,
                disabledSee: false,
            }
        },
        created () {
            let that = this
            this.$axios.post(
                '/SystemInformation/select',
                {
                    "authorid": 0,
                    "id": that.id,
                    "lpcontent": "",
                    "lpday": 0,
                    "lpmonth": 0,
                    "lpyear": 0,
                    "title": ""
                }
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
                if(this.$GLOBAL.userType == 1) {
                    this.$router.push({path:'/ConservatorMain',})
                } else if (this.$GLOBAL.userType == 2) {
                    this.$router.push({path:'/TeacherMain',})
                } else if (this.$GLOBAL.userType == 3) {
                    this.$router.push({path:'/StudentMain',})
                } else {
                    this.$router.push({path:'/LiupengHead',})
                }
            },

        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .lpMyWay {
        width: 800px;
        margin: 0 auto;
        background-color:white;
        box-shadow:0 5px 20px #999;
        align-items: center;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
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
        width: 800px;
        background-color: blanchedalmond;
    }
</style>