<template>
  <main>
    <h1>Inputs</h1>
  </main>
  <br />
  <p>
    Input element supports all text inputs; email, password, textarea, and
    number
  </p>
  <br />

  <form action="" @submit.prevent="printValue">
    <FInput
      placeholder="Full Name"
      label="Name"
      type="text"
      success-message="Name is available!"
      validation-message="Name should be of minimum 7 characters"
      minlength="7"
      size="lg"
      state="success"
      bordered
      disabled
      v-model="testVal"
    />

    <FInput
      placeholder="Full Name"
      label="Name"
      type="text"
      success-message="Name is available!"
      validation-message="Name should be of minimum 7 characters"
      minlength="7"
      size="lg"
      state="success"
      bordered
      v-model="testVal"
    />

    <!-- <FButton label="submit" /> -->
  </form>
</template>

<script setup>
import FInput from "../components/input/FInput.vue";
import FButton from "../components/button/FButton.vue";
import { ref } from "vue";
let testVal = ref(null);

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

form {
  width: 200px;
}
</style>
