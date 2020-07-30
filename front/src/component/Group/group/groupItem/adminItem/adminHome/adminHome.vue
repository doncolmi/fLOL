<template>
    <div>
        <Top />
        <h1>관리 메뉴</h1>
        <div class="row">
            <Menu :menu="this.notice" />
            <Menu :menu="this.member" />
        </div>
        <div class="row">
            <Menu :menu="this.vs" />
            <Menu :menu="this.group" />
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
        },
        data() {
            return {
                notice : {
                    go : 12,
                    title : "공지사항 관리",
                    exp : "그룹 공지사항 작성 및 삭제",
                    class : "fas fa-bullhorn"
                },
                member : {
                    go : 13,
                    title : "멤버 관리",
                    exp : "그룹 멤버 추가 및 삭제",
                    class : "fas fa-users"
                },
                vs : {
                    go: 14,
                    title : "내전 관리" ,
                    exp : "아직 준비중 입니다.",
                    class : "fas fa-khanda",
                },
                group : {
                    go: 15,
                    title : "그룹 관리",
                    exp : "그룹 정보 수정 및 삭제",
                    class : "fas fa-cog"
                }
                
            }
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