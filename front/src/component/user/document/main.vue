<template>
  <div>
    <update
      :send-date="this.sendData.modifiedDate"
      :account="this.sendData.encryptedAccountId"
    ></update>
    <mainItem></mainItem>
  </div>
</template>

<script>
import mainItem from "./mainItem";
import update from "./update";
export default {
  props: ["sendData"],
  components: {
    mainItem: mainItem,
    update: update
  }
};
</script>

<style scoped></style>
