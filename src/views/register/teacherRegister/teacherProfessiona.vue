<template>
    <div class="teacherProfessiona">
        <div class="myTop">
            <el-page-header @back="goBack" content="专业信息表"></el-page-header>
        </div>
        <div>
            <Professiona></Professiona>
        </div>
    </div>
</template>

<script>
    import Professiona from "../../../components/professiona/professiona";
    export default {
        name: "teacherProfessiona",
        methods: {
            goBack() {
                this.$router.push({path:'/TeacherRegister',})
            },
        },
        components: {Professiona}
    }
</script>

<style scoped>
    .myTop{
        padding: 0.5%;
    }
</style>