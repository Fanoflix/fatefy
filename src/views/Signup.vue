<template>
  <section>
    <h1>Signup</h1>
  </section>
</template>

<script setup>
import { useThemeStore } from "../stores/theme.js";
import { storeToRefs } from "pinia";

const themeStore = useThemeStore();
const themeStoreState = storeToRefs(themeStore);
console.log(themeStoreState.getIsDark.value);
</script>

<style scoped lang="scss"></style>
