<template>
  <FContainer
    width="220"
    height="100vh"
    class="side-bar"
    heading="test"
  ></FContainer>
</template>

<script setup>
/* 
  TODO Make Sidebar retractable 
  TODO Make Sidebar a separate component insteadof just a container
*/
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
