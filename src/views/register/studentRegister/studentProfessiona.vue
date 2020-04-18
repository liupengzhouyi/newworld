<template>
    <div class="studentProfessiona">
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
        name: "studentProfessiona",
        methods: {
            goBack() {
                this.$router.push({path:'/StudentRegister',})
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