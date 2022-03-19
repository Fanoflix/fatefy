<template>
  <f-button type="important" label="Change Theme" @click="changeTheme" />
  <br />

  <div class="nav">
    <FButton
      type="secondary"
      label="See Button Component"
      @click="$router.push('/')"
    />

    <FButton
      type="secondary"
      label="See Input Component"
      @click="$router.push('/inputShowcase')"
    />
  </div>
  <RouterView />
</template>

<script setup>
import FButton from "./components/button/FButton.vue";
import { RouterView } from "vue-router";
import { useThemeStore } from "./stores/theme.js";
// import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";

// TODO: Extract this snippet wherever you implement the 'Switch Theme' button

const themeStore = useThemeStore();
let body = document.querySelector("body");
// const { isDark } = storeToRefs(themeStore);
// const { changeTheme } = mapActions(useThemeStore, ["changeTheme"]);
const { changeTheme, setIsDark } = themeStore; // same thing as the above line

onBeforeMount(() => {
  let storedIsDark = JSON.parse(localStorage.getItem("isDark"));
  if (storedIsDark) {
    body.classList.add("dark");
    setIsDark(storedIsDark);
  }
});

// changing Body's background color according to isDark in store theme.js
themeStore.$subscribe((_, state) => {
  if (state.isDark) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});

// TODO =========================================== END ===========
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/base-styling.scss";
@include base-styling;

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.nav {
  display: flex;
  gap: 5px;
}
</style>
