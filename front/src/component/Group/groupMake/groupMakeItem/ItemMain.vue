<template>
  <transition name="component-fade" mode="out-in">
    <component v-bind:is="view"></component>
  </transition>
</template>

<script>
import name from "./name";
import open from "./open";
import adminPassword from "./adminPassword";
import check from "./check";
import code from "./code";
export default {
  data() {
    return {
      view: name,
      name: null,
      open: null,
      password: null,
      adminPassword: null,
      code: null
    };
  },
  components: {
    name: name,
    open: open,
    adminPassword: adminPassword,
    check: check,
    code: code
  },
  methods: {
    saveName() {
      this.view = open;
    },
    saveOpenAndPassword() {
      this.view = adminPassword;
    },
    saveAdminPassword() {
      this.view = check;
    },
    back(page) {
      if (page === 0) {
        this.view = name;
      } else if (page === 1) {
        this.view = open;
      } else if (page === 2) {
        this.view = adminPassword;
      } else if (page === 3) {
        this.view = code;
      }
    }
  }
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