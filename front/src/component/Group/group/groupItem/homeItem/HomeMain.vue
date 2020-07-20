<template>
    <div class="HomeMain">
        <div class="title">팡주불주댁</div>
        <div class="setting">
            <span @click="goSetting" style="cursor:pointer"><i class="fas fa-wrench" style="margin-right:0.2em;"></i>관리 메뉴</span>
        </div>
        <div class="info">
            <Home-Main-Menu v-for="item in menu" v-bind:key="item.name" :content="item"></Home-Main-Menu>
        </div>
    </div>
</template>

<script>
    import HomeMainMenu from './HomeMainMenu';
    export default {
        data() {
            return {
                menu : [{
                    title : "공지사항",
                    exp : "공지사항은 관리자만 작성이 가능합니다.",
                    go : 0
                },
                {
                    title : "내전 팀 구성",
                    exp : "친구들과 5vs5 팀짜기",
                    go : 1,
                },
                {
                    title : "아직 준비 중 입니다.",
                    exp : "추후 개발 예정입니다.",
                    go : 2,
                }],
            }
        },
        methods: {
            goSetting() {
                this.$router.push({ path: `/g/${this.$route.params.code}/setting` });
            },
        },
        components : {
            HomeMainMenu : HomeMainMenu,
        }

    }
</script>

<style scoped>
    .HomeMain{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50em;
    }
    .title {
        width:100%;
        text-align: center;
        font-size:3em;
        font-weight: bold;
    }
    .setting {
        width:100%;
        color:gray;
        font-size:0.9em;
        text-align: right;
        padding-bottom:1em;
        border-bottom:1px solid rgba(0,0,0,0.3);
    }
    .info{
        width:100%;
        display: flex;
        flex-direction: column;
    }
</style>