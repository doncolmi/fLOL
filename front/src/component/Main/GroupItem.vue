<template>
  <div class="item itemBg soloImg">
    <div class="itemTitle">
      유저 검색 하기
    </div>
    <div class="itemContents">
      FLOL은 전적을 분석하거나 전술적인 정보를 제공하지 않습니다.<br />
      재미있는 데이터들을 모아 보여주는 역할을 합니다.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.item {
  -webkit-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
  box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
  display: flex;
  flex-direction: column;
}
.itemBg {
  width: 25%;
  height: 500px;
  border-radius: 30px;
  background-color: #ffcdd2;
  font-family: "Noto Sans KR", sans-serif;
  padding: 1% 1%;
  cursor: pointer;
}
.soloImg {
  background-image: url("../../assets/main/solo.png");
  background-repeat: no-repeat;
  background-position: 50% 65%;
  background-size: 50%;
}

.itemBg:hover {
  -webkit-box-shadow: 0px 0px 15px 0px rgba(168, 168, 168, 1);
  -moz-box-shadow: 0px 0px 15px 0px rgba(168, 168, 168, 1);
  box-shadow: 0px 0px 15px 0px rgba(168, 168, 168, 1);
}
.itemTitle {
  text-align: center;
  font-size: 3em;
  margin-top: 15%;
  font-weight: bold;
}
.itemContents {
  font-weight: bold;
  display: flex;
  margin-top: 20%;
  font-size: 1em;
  align-content: center;
  justify-content: flex-end;
}
</style>
