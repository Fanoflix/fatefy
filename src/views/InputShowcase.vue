<template>
  <main>
    <h1>Inputs</h1>
  </main>
  <p>
    Input element supports all text inputs; email, password, textarea, and
    number
  </p>
  <br />

  <form action="" @submit.prevent="printValue">
    <FInput
      placeholder="test"
      label="Name"
      type="password"
      revealable
      rounded
      maxlength="10"
      v-model="testVal"
    />
    <FButton label="submit" />
  </form>
</template>

<script setup>
import FInput from "../components/input/FInput.vue";
import FButton from "../components/button/FButton.vue";
import { ref } from "vue";
let testVal = ref("");

let printValue = () => {
  console.log(testVal.value);
};
</script>

<style lang="scss" scoped>
button {
  margin: 4px 7px;
  margin-left: 0;
}

div {
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
}
</style>
