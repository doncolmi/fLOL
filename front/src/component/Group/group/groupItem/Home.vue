<template>
    <div class="homeItem">
        <div class="w70">
            <Home-Main></Home-Main>
        </div>
        <div class="w30">
            <User-List :member="this.group.members" :membersNum="this.group.membersNum"></User-List>
        </div>
    </div>
</template>

<script>
    import HomeMain from './homeItem/HomeMain';
    import UserList from './homeItem/UserList';
    export default {
        data() {
            return {
                group: this.$parent.group,
            };
        },
        components : {
            HomeMain : HomeMain,
            UserList : UserList,
        },
    }
</script>

<style scoped>
    .homeItem {
        width: 70%;
        height:40em;
        display: flex;
    }
    .w70 { width:68%; margin-right:2%;}
    .w30 { width:30%;}
</style>