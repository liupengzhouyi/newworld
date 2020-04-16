<template>
    <div class="SaySome">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="登陆成功"/>
        <div>
            <h1>
                {{ this.$GLOBAL.landing }}
            </h1>
        </div>
    </div>
</template>

<script>
    import HelloWorld from "../components/HelloWorld";
    export default {
        name: "SaySome",
        components: {
            HelloWorld
        }
    }
</script>

<style scoped>

</style>