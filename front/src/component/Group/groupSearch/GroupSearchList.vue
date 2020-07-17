<template>
    <div class="hi">
        <div @click="goGroup(item.code)" v-for="item in data" v-bind:key="item.name" class="item">
            <div class="top">
                <div class="name">{{ item.name }}</div>
                <div class="time">그룹 생성일 : {{ item.createdDate.slice(2,10)}}</div>
            </div>
            <div class="bottom">
            코드 : {{item.code}} / 멤버 : {{item.membersNum}}명
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["data"],
        methods : {
            goGroup(codes) {
                this.$router.push({ path: `/g/${codes}` });
            }
        }
    }
</script>

<style scoped>
    .hi {
        margin:0 auto;
        padding-top:2em;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .item {
        margin: 1em 0em;
        width:100%;
        height: 4em;
        box-shadow: 0px 0px 5px 0px lightgray;
        transition: .3s;
        padding: 1em;
        cursor: pointer;
    }
    .item:hover {
        box-shadow: 0px 0px 10px 0px lightgray;
    }
    .top {
        width:100%;
        display: flex;
    }
    .top div{
        width:50%;
    }
    .top .name {
        font-size: 2em;
        font-weight: bold;
    }
    .top .time {
        text-align: right;
        font-size: 0.8em;
        color:gray;
    }
    .bottom {
        width:50%;
        font-size:0.8em;
        color:gray;
    }
</style>