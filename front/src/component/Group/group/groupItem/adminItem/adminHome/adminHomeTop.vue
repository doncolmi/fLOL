<template>
    <div class="btns">
        <div class="btn">
            <a @click="go(-1)"><span><i class="fas fa-home"></i></span> 그룹 홈</a>
        </div>
        <div class="btn">
            <a @click="go(11)"><span><i class="fas fa-wrench"></i></span> 관리 홈</a>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            go(num) {
                this.$parent.$parent.go(num);
            }
        }
    }
</script>

<style scoped>
    .btns {
        font-size: 0.9em;
        display: flex;
        color:gray;
        padding-bottom: 1em;
        border-bottom: 1px solid lightgray;
    }
    .btn{
        width:50%;
    }
    .btn a {
        cursor:pointer;
    }
    .btn:last-child{
        text-align: right;
    }
</style>