<template>
  <section class="side-bar" :class="[{ dark: isDark }]"></section>
</template>

<script setup>
/*
  TODO Make Sidebar retractable
*/

// Imports
import { storeToRefs } from "pinia";
import { useThemeStore } from "../../stores/theme";

// State

// Reactive State

const { isDark } = storeToRefs(useThemeStore());
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.side-bar {
  z-index: $z-top;
  position: fixed;
  top: $nav-height;
  left: 0;

  background-color: $color-background;
  border-right: 1px solid $white-soft;
  width: 220px;
  height: 100vh;
}

.dark.side-bar {
  background-color: $color-background-dark;
  border-right: 1px solid $black-soft;
}
</style>
