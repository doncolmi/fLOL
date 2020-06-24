<template>
  <div class="item itemBg">
      <div class="itemTitle">
        유저 검색 하기
      </div>
      <div class="itemContents">
        유저 검색은 여기서 하세용 ㅋㅋ루삥뽕
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .item {
    box-shadow: 1px 1px 3px 0px darkslategrey;
  }
  .itemBg {
    width:30%;
    border-radius: 30px;
    background-color : #f4f5f9;
    font-family: "Noto Sans KR", sans-serif;
    padding: 1% 3%;
    opacity: 0.7;
  }

  .itemBg:hover {
    opacity: 1.0;
    transition: 0.5s;
  }
  .itemTitle {
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
  }
  .itemContents{
    margin-top:5%;
    text-align: center;
  }
</style>
