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
                this.$GLOBAL.professionalid + {{ this.$GLOBAL.professionalid }}
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
        <div>
            <el-button @click="findTeahcer1()">查看本专业教师</el-button>
        </div>
        <div>
            <el-button @click="findTeacher2()">查看本系教师</el-button>
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
            },
            findTeahcer1() {
                this.$router.push({path:'/SelectProfessionTeacher',})
            },
            findTeacher2() {
                this.$router.push({path:'/SelectCollegeTeacher',})
            }
        },
        components: {
            HelloWorld
        }
    }
</script>

<style scoped>

</style>