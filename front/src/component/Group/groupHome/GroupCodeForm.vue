<template>
    <div class="wrapper line">
        <div class="title">그룹 코드로 접속하세요.</div>
        <div class="content">
            <p>
                그룹마다 고유하게 부여되는 코드를 입력해서 그룹에 접속하세요.<br>
                비공개된 그룹은 각 그룹이 설정한 비밀번호를 요구합니다.
            </p>
        </div>
        <FindGroup></FindGroup>
        <div class="content">
            <p>
                <a style="font-weight:bold;">'http://localhost:8080/g/그룹코드'</a> 으로도 접속 가능합니다.
            </p>
        </div>
    </div>
</template>

<script>
import FindGroup from '../bar/FindGroup';
    export default {
        components : {
            FindGroup : FindGroup,
        }
    }
</script>

<style scoped>
div {
    margin-bottom:0.5em;
}
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3% 1%;
}
.line {
    border-right: 1px solid lightgray;
}
.title{
    font-size: 2em;
    font-weight: bold;
}
.content{
    color:rgba(0,0,0,0.5);
    text-align: center;
}
@media ( min-height: 1300px ) {

}

@media ( max-width: 1025px ) {

}

@media ( max-width: 525px ) {

}
</style>