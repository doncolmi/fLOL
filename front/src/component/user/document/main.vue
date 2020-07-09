<template>
    <div>
        <mainItem></mainItem>
    </div>
</template>

<script>
    import mainItem from './mainItem';
    export default {
        props: ['sendData'], 
        components: {
            mainItem : mainItem,
        }

        
    }
</script>

<style scoped>

</style>