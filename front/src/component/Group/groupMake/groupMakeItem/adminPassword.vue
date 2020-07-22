<template>
  <div style="width:100%;">
    <h1>그룹 관리 비밀번호 설정</h1>
    <p>관리 비밀번호는 그룹 내 유저 추가/삭제 및 기타 관리에 사용됩니다.</p>
    <input @blur="valiOnInput" type="password" v-model="password" maxlength="20" autocomplete="off" />
    <div class="error">{{ this.error }}</div>
    <div class="addBox">
      <button @click="back(1)" class="btn">이전</button>
      <button @click="valiOnBtn" class="btn" v-bind:disabled="this.password.length < 6">다음</button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      error: "비밀번호는 6~20자 이내여야 합니다.",
      password: ""
    };
  },
  methods: {
    valiOnInput() {
      const pw = this.password;
      if ((pw.length > 0 && pw.length < 6) || pw.length > 20) {
        this.error = "비밀번호는 6자 이상 20자 이하여야 합니다.";
      } else if (pw.length === 0) {
        this.error = "비밀번호를 입력해주세요";
      } else {
        this.error = "다음 버튼을 눌러주세요";
      }
    },
    valiOnBtn() {
      const pw = this.password;
      if (pw.length > 5 && pw.length < 21) {
        this.$parent.adminPassword = pw;
      }
      this.$parent.saveAdminPassword();
    },
    back(page) {
      this.$parent.back(page);
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
}
p {
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.5);
}
input {
  margin-top: 3em;
  width: 30%;
  font-size: 1.3em;
  border: 0px;
  border-bottom: 1px solid lightgray;
  height: 50px;
  text-align: center;
  font-weight: bold;
  transition: 1s;
}
input:focus {
  outline: none;
}
.error {
  width: 100%;
  text-align: center;
  color: gray;
  font-size: 0.8em;
  margin-top: 0.3em;
}
.addBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.addBox div:first-child {
  margin-right: 1em;
}

.btn {
  color: white;
  border: 0px;
  background-color: #ef9a9a;
  border-radius: 1em;
  padding: 0.5em 1.5em;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 1em;
}
.btn:focus {
  outline: none;
}
.btn:disabled {
  background-color: gray;
  cursor: default;
}
.btn:first-child {
  margin-right: 1em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>