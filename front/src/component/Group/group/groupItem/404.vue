<template>
    <div class="load">
        <img width="30%" src="/src/assets/notFound.png" />
        <a>존재하지 않는 그룹 코드입니다.</a>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .load {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2%;
    }

    .load a {
        margin-top: 2%;
        font-size: 2em;
        font-weight: bold;
    }
</style>