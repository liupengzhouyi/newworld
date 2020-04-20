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
            <Home></Home>
        </div>

    </div>
</template>

<script>
    import HelloWorld from "../components/HelloWorld";
    import Home from "./Home";

    export default {
        name: "SaySome",
        methods: {


        },
        components: {
            Home,
            HelloWorld
        }
    }
</script>

<style scoped>

</style>