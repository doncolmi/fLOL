<template>
  <div class="inputBox shadow">
        <input type="text" id="inputForm"  placeholder="유저 이름을 검색해주세요">
        <span @click="searchUser()" class="addContainer">
            <i class="addBtn fas fa-search" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
export default {
  methods: {
    searchUser() {
      const inputForm = document.getElementById('inputForm');
      if(inputForm.value.length < 1) {
        alert("검색할 사용자 이름을 입력해주세요");
        return
      }
      this.$router.push({path : `/user/${inputForm.value}`});
    }
  }
}
</script>

<style>

.inputBox {
        width: 50%;
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 10px;
        margin: 0 auto;
        border:1px solid gray;
    }
    .inputBox input {
        border-style: none;
        font-size: 1.2rem;
        width: 60%;
        text-align: center;
    }
    .inputBox input:focus {
        outline: none;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: inline-block;
        width: 5rem;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
        font-size:1.5em;
    }
</style>
