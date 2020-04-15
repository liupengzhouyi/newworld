<template>
    <div class="test">
        <h1>网站列表</h1>
        <p> {{ info }}</p>
        <div>
            <el-row>
                <el-button type="success" @click="this.ppp()">登陆</el-button>
            </el-row>
        </div>

    </div>
</template>

<script>

    export default {
        name: "test",
        data () {
            return {
                info: null
            }
        },
        mounted: {
            ppp() {
                this.$message.error('请输入用户名');
                this.axios
                    .post('http://127.0.0.1:8080/indexCationPaper/now')
                    .then(function (response) {
                        this.info = response
                    })
            }
        }
    }
</script>

<style scoped>

</style>