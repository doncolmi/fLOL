<template>
    <div class="wrapper">
        <Top-Banner></Top-Banner>
        <Item-Main></Item-Main>
    </div>
</template>

<script>
    import TopBanner from '../../TopBanner';
    import ItemMain from './groupItem/ItemMain';
    export default {
        components : {
            TopBanner : TopBanner,
            ItemMain : ItemMain,
        }
    }
</script>

<style scoped>
.wrapper{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>