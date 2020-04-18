<template>
    <div class="professiona">
        <div>
            <h1>
                {{ title }}
            </h1>
        </div>
        <div class="lpMyWay">
            <el-table
                    :data="lpData"
                    style="width: 100%"
                    border
                    :row-class-name="tableRowClassName">
                <el-table-column
                        prop="number"
                        label="编号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="college"
                        label="学院"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="professional"
                        label="专业">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "professiona",
        data() {
            return {
                title: "专业信息表",
                lpData: null,
                gobackwhere: this.$route.params,
            }
        },
        methods: {
            tableRowClassName({rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
        },
        created() {
            let that = this
            this.$axios.post(
                '/Professional/getAll',
            ).then(
                async function (response) {
                    console.log(response);
                    console.log(response.data);
                    that.lpData = response.data.returnObject;
                }
            )
        }
    }
</script>

<style scoped>
    .myTop{
        padding: 0.5%;
    }
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
    .lpMyWay {
        align-items: center;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }
</style>