<template>Login</template>

<script setup>
import { useThemeStore } from "../stores/theme.js";
import { storeToRefs } from "pinia";

const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
</script>

<style scoped lang="scss"></style>
