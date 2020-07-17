<template>
    <div class="box">
        <div class="text">
            <div class="title">그룹 검색</div>
            <div class="content">찾으시는 그룹의 이름을 검색해주세요. 검색기능은 공개된 그룹만 보여집니다.</div>
        </div>
        <Search-Bar></Search-Bar>
    </div>
</template>

<script>
    import SearchBar from '../bar/SearchBar';
    export default {
        components : {
            SearchBar : SearchBar,
        }
    }
</script>

<style scoped>
.box {
    height:17em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.text{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.text div {
    margin-bottom: 0.3em;
}
.title{
    font-size: 2em;
    font-weight: bold;
}
.content{
    color:rgba(0,0,0,0.5);
}
</style>