<template>
    <div class="homeItem">
        <Home-Main></Home-Main>
    </div>
</template>

<script>
    import HomeMain from './homeItem/HomeMain';
    export default {
        data() {
            return {
                group: this.$parent.group,
            };
        },
        components : {
            HomeMain : HomeMain,
        }
    }
</script>

<style scoped>
    .homeItem {
        width: 50%;
        height:40em;
    }
    .w70 { width:100%;}
</style>