<template>
  <div class="inputBox shadow">
    <input
      type="text"
      id="inputForm"
      v-on:keyup.enter="searchUser()"
      placeholder="그룹 코드를 입력해주세요."
      autocomplete="off"
    />
    <span @click="searchUser()" class="addContainer">
      <i class="addBtn fas fa-play" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    searchUser() {
      const inputForm = document.getElementById("inputForm");
      if (inputForm.value.length < 1) {
        alert("검색할 사용자 이름을 입력해주세요");
        return;
      }
      this.$router.push({ path: `/user/${inputForm.value}` });
    }
  }
};
</script>

<style>
</style>
