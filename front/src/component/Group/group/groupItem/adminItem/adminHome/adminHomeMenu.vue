<template>
    <div class="elem elemSize elemFlex" @click="go(12)">
        <div class="top">
            <div class="title">공지사항 관리</div>
            <div class="exp">exp</div>
        </div>
        
        <div class="icon">
            <span><i class="fas fa-bullhorn"></i></span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{ 
                parent : this.$parent.$parent,
            }
        },
        created() {
            console.log("부모값");
            console.log(this.$parent.$parent);
        },
        methods : {
            go(num) {
                this.parent.go(num);
            }
        }
    }
</script>

<style scoped>
    .elem {
        background: rgba(0,0,0,0.01);
        box-shadow: 0px 0px 7px 0px lightgray;
        transition: .3s;
        cursor: pointer;
        opacity: 0.7;
    }
    .elem:hover {
        opacity: 1;
        background: white;
        box-shadow: 0px 0px 15px 0px lightgray;
    }
    .elemSize{
        width: 300px;
        height: 300px;
    }
    .elemFlex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .top{
        text-align: center;
        height:30%;
    }

    .title {
        font-size:2em;
        font-weight: bold;
    }
    .exp{
        font-size:0.9em;
        color:gray;
    }
    .icon {
        color:gray;
        font-size:4em;
        transition: .3s;
    }
    .elem:hover .icon {
        color:black;
    }
</style>