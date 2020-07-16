<template>
    <div>
    <router-link to="/search" class="topMenu">유저 검색</router-link>
      <router-link to="/group" class="topMenu">그룹 검색</router-link>
      <router-link to="/make" class="topMenu">그룹 만들기</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.topMenu {
    font-weight:normal; 
    font-size: 0.9em; 
    color:white; 
    margin-right:1%;
    text-decoration: none;
    cursor:pointer;
}
</style>