<template>
    <div class="wrapper flex">
        <div class="title">{{ this.content.title }}</div>
        <div class="exp">{{ this.content.exp }}</div>
        <div class="btn" @click="go(content.go)">바로가기</div>
    </div>
</template>

<script>
    export default {
        props : ["content"],
        methods : {
            go(num) {
                this.$parent.$parent.$parent.go(num);
            }
        }
    }
</script>

<style scoped>
.wrapper {
    width:80%;
    background: #ecf0f1;
    padding: 2%;
    margin: 0 auto;
    margin-top: 2em;
    border-radius: 1.5em;
    box-shadow: 0px 0px 5px 0px rgba(168, 168, 168, 1);
}
.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.title{
    font-size: 1.8em;
    font-weight: bold;
}
.exp{
    margin-top:0.1em;
    font-size: 0.9em;
    color:rgba(0,0,0,0.6);
}
.btn {
    margin-top:1em;
    padding: 1.3% 2.4%;
    background: #95a5a6;
    border-radius: 1em;
    color:white;
    box-shadow: 0px 0px 3px 0px rgba(168, 168, 168, 1);
    transition: .3s;
    cursor: pointer;
}
.btn:hover {
    box-shadow: 0px 0px 8px 0px rgba(168, 168, 168, 1);
}
</style>