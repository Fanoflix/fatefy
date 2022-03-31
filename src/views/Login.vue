<template class="login">
  <section class="login">
    <main>
      <h1>Login</h1>
    </main>
  </section>
</template>

<script setup>
import { useThemeStore } from "../stores/theme.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);

onMounted(() => {
  console.log("Login mounted");
});
</script>

<style scoped lang="scss"></style>
