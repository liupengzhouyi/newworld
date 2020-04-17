<template>
    <div class="studentRegisterOver">
        <div class="myTop">
            <el-page-header @back="goBack" content="学生注册详情信息"></el-page-header>
        </div>
        <div>
            <el-container>
                <el-header height="10%">
                    <div>
                        <h3>
                            {{ title }}
                        </h3>
                    </div>
                </el-header>
            </el-container>
        </div>
        <div>
            <table id="customers" style="margin: auto">
                <tr>
                    <th>名称</th>
                    <th>数据</th>
                </tr>
                <tr >
                    <td>头像</td>
                    <td>
                        <el-aside width="120px" style="background-color: rgb(34,110,146)">
                            <el-image style="padding: 10px; width: 100px; height: 100px" :src="returnObject.imageurl" :fit="fill"></el-image>
                        </el-aside>
                    </td>
                </tr>
                <tr>
                    <td>姓名</td>
                    <td>{{ returnObject.name }}</td>
                </tr>
                <tr class="alt">
                    <td>学号</td>
                    <td>{{ returnObject.studentid }}</td>
                </tr>
                <tr>
                    <td>专业编号</td>
                    <td>{{ returnObject.prodessionalid }}</td>
                </tr>
                <tr>
                    <td>联系方式</td>
                    <td>{{ returnObject.phonenumber }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "studentRegisterOver",
        data() {
            return {
                title: "学生注册信息",
                returnObject: this.$route.params,
            }
        },
        methods: {
            goBack() {
                this.$router.push({path:'/SelectRegister',})
            },
        }
    }
</script>

<style scoped>
    #customers
    {
        font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
        width:60%;
        align-items: center;
        border-collapse:collapse;
    }
    #customers td, #customers th
    {
        font-size:1em;
        border:1px solid #98bf21;
        padding:3px 7px 2px 7px;
    }
    #customers th
    {
        font-size:1.1em;
        text-align:center;
        padding-top:5px;
        padding-bottom:4px;
        background-color:#A7C942;
        color:#ffffff;
    }
    #customers tr.alt td
    {
        color:#000000;
        background-color:#EAF2D3;
    }
    .main{
        text-align: center; /*让div内部文字居中*/
        background-color: #fff;
        border-radius: 20px;
        width: 300px;
        height: 350px;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>