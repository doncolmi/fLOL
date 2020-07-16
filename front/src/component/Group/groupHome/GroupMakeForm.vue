<template>
    <div class="wrapper line">
        <div class="title">그룹을 만드세요.</div>
        <div class="content">
            <p>
                그룹을 만들고 친구들의 계정을 추가하세요.<br>
                친구들의 계정이 아닌 자신이 좋아하는 게이머의 계정을 추가해도 좋습니다.
            </p>
        </div>
        <div class="btn">
            <span @click="searchUser()" class="addContainer addBtn">
                그룹 만들기
            </span>
        </div>
        <div class="footerContent">
            <p>
                별도의 회원가입이 필요하지 않습니다.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        components : {
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
    text-align: center;
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
    width:100%;
    color:rgba(0,0,0,0.5);
}
.footerContent{
    width:100%;
    color:rgba(0,0,0,0.5);
}
.addContainer {
  background: #EF9A9A;
  display: flex;
  justify-content: center;
  align-items: center;
  height:50px;
  cursor: pointer;
  text-align: center;
  border-radius: 2em;
}
.addBtn {
  color: white;
  padding: 0% 30%;
  cursor: pointer;
}

.btn {
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0em;
}
@media ( min-height: 1300px ) {

}

@media ( max-width: 1025px ) {

}

@media ( max-width: 525px ) {

}
</style>