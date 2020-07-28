<template>
    <div class="wrapper">
        <Top />
        AdminNotice
    </div>
</template>

<script>
    import Top from '../adminHome/adminHomeTop';
    export default {
        components : {
            Top: Top,
        }
    }
</script>

<style scoped>
.wrapper {
    width:70%;
}
</style>