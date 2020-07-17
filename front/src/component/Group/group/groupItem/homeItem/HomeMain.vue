<template>
    <div class="HomeMain">
        <div class="title">팡주불주댁</div>
        <div class="setting">
            <span @click="goSetting" style="cursor:pointer"><i class="fas fa-wrench" style="margin-right:0.2em;"></i>관리 메뉴</span>
        </div>
        <div class="info">
            <div class="userList">
                <User-List :member="this.$parent.group.members" :membersNum="this.$parent.group.membersNum"></User-List>
            </div>
        </div>
    </div>
</template>

<script>
    import UserList from './UserList';
    export default {
        methods: {
            goSetting() {
                this.$router.push({ path: `/g/${this.$route.params.code}/setting` });
            },
        },
        components : {
            UserList : UserList,
        }

    }
</script>

<style scoped>
    .HomeMain{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
    .userList{
        width:40%;
    }
    .info{
        width:100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
</style>