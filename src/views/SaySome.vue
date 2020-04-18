<template>
    <div class="SaySome">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="登陆成功"/>
        <div>
            <h1>
                {{ this.$GLOBAL.userID }}
            </h1>
            <h1>
                {{ this.$GLOBAL.landing }}
            </h1>
            <h1>
                {{ this.$GLOBAL.userNumber }}
            </h1>
            <h1>
                {{ this.$GLOBAL.userType }}
            </h1>
            <h1>
                {{ this.$GLOBAL.imageurl }}
            </h1>
            <h1>
                {{ this.$GLOBAL.userName }}
            </h1>
        </div>
        <div>
            <el-button @click="showMeTitle()">教师题目</el-button>
        </div>

        <div>
            <el-button @click="uploadTitle()">上传教师题目</el-button>
        </div>

    </div>
</template>

<script>
    import HelloWorld from "../components/HelloWorld";
    export default {
        name: "SaySome",
        methods: {
            showMeTitle() {
                this.$router.push({path:'/ShowMyTitle',})
            },
            uploadTitle() {
                this.$router.push({path:'/UploadTitle',})
            }
        },
        components: {
            HelloWorld
        }
    }
</script>

<style scoped>

</style>