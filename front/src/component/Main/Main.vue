<template>
  <div>
    <top></top>
    <div class="">
      <bottom></bottom>
    </div>
  </div>
</template>

<script>
import top from './Top';
import bottom from './Bottom'

export default {
  components: {
        top: top,
        bottom : bottom,
    },
  name: "app",
  methods: {}
};
</script>

<style>
</style>
