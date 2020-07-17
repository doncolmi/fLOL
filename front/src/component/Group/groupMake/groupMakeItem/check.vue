<template>
  <div style="width:100%;">
    <h1>그룹 생성 정보 확인</h1>
    <p>현재까지 작성하신 정보입니다. '생성 완료' 버튼을 누르시면 그룹이 만들어집니다.</p>
    <div class="box">
      <div class="title">그룹 이름</div>
      <hr style="width: 20%;" />
      <div class="content">{{ this.$parent.name }}</div>
    </div>
    <div v-if="isOpen" class="box">
      <div class="title">그룹 공개 여부</div>
      <hr style="width: 20%;" />
      <div class="content">{{ this.isOpen }}</div>
    </div>
    <div v-if="!this.$parent.open" class="box">
      <div class="title">그룹 비밀번호</div>
      <hr style="width: 20%;" />
      <input disabled="disabled" type="password" id="pw" :value="this.$parent.password" />
      <div
        @mouseover="seePassword('pw')"
        @mouseleave="hidePassword('pw')"
        class="addContainer addBtn active"
      >마우스 올려 확인하기</div>
    </div>
    <div class="box">
      <div class="title">그룹 관리 비밀번호</div>
      <hr style="width: 20%;" />
      <input disabled="disabled" type="password" id="aPw" :value="this.$parent.adminPassword" />
      <div
        @mouseover="seePassword('aPw')"
        @mouseleave="hidePassword('aPw')"
        class="addContainer addBtn active"
      >마우스 올려 확인하기</div>
    </div>
    <div class="addBox">
      <div @click="back(2)" class="addContainerBottom addBtn active">이전</div>
      <div @click="saveGroup" class="addContainerBottom addBtn active">생성 완료</div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
export default {
  created() {
    this.getIsOpen();
  },
  data() {
    return {
      isOpen: null
    };
  },
  methods: {
    seePassword(item) {
      document.getElementById(item).type = "text";
    },
    hidePassword(item) {
      document.getElementById(item).type = "password";
    },
    getIsOpen() {
      if (this.$parent.open) {
        this.isOpen = "공개 그룹";
        return;
      }
      this.isOpen = "비공개 그룹";
    },
    back(page) {
      this.$parent.back(page);
    },
    saveGroup() {
      const parent = this.$parent;
      let password;
      if (parent.open) password = "";
      else password = parent.password;
      const group = {
        name: parent.name,
        open: parent.open,
        password: password,
        adminPassword: parent.adminPassword
      };
      axios.post(`${VUE_APP_LOCAL_URI}/g`, group).then(({ data }) => {
        parent.code = data;
        this.back(3);
      });
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
  margin-top: 0.5em;
  width: 20%;
  font-size: 1.3em;
  border: 0px;
  border-bottom: 1px solid lightgray;
  height: 50px;
  text-align: center;
  font-weight: bold;
  transition: 1s;
}

.addBox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}
.addBox div:first-child {
  margin-right: 1em;
}
.addContainerBottom {
  width: 5%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
}

.addContainer {
  width: 20%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
  margin: 0 auto;
}
.addBtn {
  transition: 0.3s;
  color: white;
  margin-top: 0.5em;
}
.active {
  background: #ef9a9a;
  cursor: pointer;
}

.btnWrapper {
  width: 30%;
  display: flex;
  margin: 0 auto;
  border: 1px solid lightgray;
  font-size: 1.3em;
  font-weight: bold;
}
.btnWrapper a {
  font-weight: normal;
  font-size: 0.6em;
  color: gray;
}

.box {
  margin-top: 3em;
}
.title {
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 0.5em;
}
.content {
  font-size: 1.1em;
}
</style>