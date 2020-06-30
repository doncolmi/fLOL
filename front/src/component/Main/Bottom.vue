<template>
  <div class="bottom">
    <BottomItem :send-data="makeGroup"></BottomItem>
    <BottomItem :send-data="dontJoin"></BottomItem>
    <BottomItem :send-data="star"></BottomItem>
  </div>
</template>

<script>
import BottomItem from './BottomItem';

export default {
  components : {
    BottomItem : BottomItem,
  },
  data : function() {
    return {
      makeGroup : {
        class : "fa fa-users",
        title : "친구들과 그룹을 만드세요!",
        contents : "같이 게임하고싶은 친구들과 그룹을 만드세요!"
      },
      dontJoin : {
        class : "fas fa-handshake-slash",
        title : "가입은 필요 없습니다!",
        contents : "따로 가입은 필요 없습니다. 생성한 그룹의 패스워드만 기억하세요!"
      },
      star : {
        class : "fas fa-user-tie",
        title : "내가 좋아하는 유저들로 그룹을 만드세요!",
        contents : "모두를 검색할 필요 없이 그룹 하나만으로 관리하세요."
      }
    }
  }
};
</script>

<style>
.bottom {
  width: 100%;
  display: flex;
  padding: 5% 0%;
  justify-content: center;
}
@media ( min-height: 1300px ) {
  .bottom {
    padding: 2% 0%;
  }
}

@media ( max-width: 1025px ) {
    .bottom{
        display: none;
    }
}

</style>
