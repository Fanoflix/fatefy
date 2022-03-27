<template>
  <FContainer width="220" height="100vh" class="side-bar"></FContainer>
</template>

<script setup>
import FContainer from "../container/FContainer.vue";
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.side-bar {
  z-index: $z-top;
  position: fixed;
  top: $nav-height;
  left: 0;

  width: 220px;
  height: 100vh;
}
</style>
