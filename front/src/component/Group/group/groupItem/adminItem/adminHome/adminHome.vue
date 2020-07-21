<template>
    <div>
        <Top />
        <h1>관리 메뉴</h1>
        <div class="row">
            <Menu />
            <Menu />
        </div>
        <div class="row">
            <Menu />
            <Menu />
        </div>
    </div>
</template>

<script>
    import Top from './adminHomeTop'
    import Menu from './adminHomeMenu';
    
    export default {
        methods: {
            
        },
        components : {
            Top : Top,
            Menu : Menu,
        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
        margin-bottom: 1em;
    }
    .row {
        width: 100%;
        display: flex;
        margin-bottom: 1em;
    }
    .row div:first-child {
        margin-right:1em;
    }

    
</style>