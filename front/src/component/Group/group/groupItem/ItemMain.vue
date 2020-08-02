<template>
  <transition name="component-fade" mode="out-in">
    <component v-bind:is="view"></component>
  </transition>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

import NotFound from "./404";
import Notice from "./homeItem/Notice";
import Password from "./homeItem/Password";

import AdminPassword from "./adminItem/adminPassword";
import AdminHome from "./adminItem/adminHome/adminHome";
import AdminNotice from "./adminItem/adminNotice/adminNotice";
import Home from "./Home";
export default {
  data() {
    return {
      group: null,
      code: null,
      view: null,
      token: null,
    };
  },
  components: {
    NotFound: NotFound,
    Notice: Notice,
    Password: Password,
    AdminPassword: AdminPassword,
    Home: Home,
    AdminHome: AdminHome,
    AdminNotice: AdminNotice,
  },
  async created() {
    this.getGroupInfo();
  },
  methods: {
    getGroupInfo() {
      this.code = null;
      this.code = this.$route.params.code;
      this.group = null;

      axios.get(`${VUE_APP_LOCAL_URI}/g/${this.code}`).then(({ data }) => {
        if (data) {
          this.group = data;
          if (data.open || this.$store.state.authGroupCode === this.code) {
            this.view = Home;
          } else {
            this.view = Password;
          }
          return;
        }
        this.view = NotFound;
      });
    },
    go(num) {
      switch (num) {
        case -1:
          this.view = Home;
          return;
        case 0:
          this.view = Notice;
          return;
        case 1:
          this.view = AdminPassword;
          return;
        case 11:
          this.view = AdminHome;
          return;
        case 12:
          this.view = AdminNotice;
          return;
        default:
          return;
      }
    },
  },
};
</script>

<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>