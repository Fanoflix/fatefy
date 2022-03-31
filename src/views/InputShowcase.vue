<template>
  <section>
    <main>
      <h1>Inputs</h1>
    </main>
    <p>
      Input element supports all text inputs; email, password, textarea, and
      number
    </p>
    <br />

    <form action="" @submit.prevent="printValue">
      <div>
        <FInput
          placeholder="Text Area"
          label="Description"
          type="textarea"
          success-message="Name is available!"
          error-message="Name should be of minimum 7 characters"
          size="sm"
          rounded
          bordered
          state="error"
          minlength="7"
          v-model="testVal"
        />
        <FInput
          placeholder="Text Area"
          label="Description"
          type="textarea"
          success-message="Name is available!"
          error-message="Name should be of minimum 7 characters"
          size="md"
          rounded
          bordered
          state="error"
          minlength="7"
          v-model="testVal"
        />
        <FInput
          placeholder="Text Area"
          label="Description"
          type="textarea"
          success-message="Name is available!"
          error-message="Name should be of minimum 7 characters"
          size="lg"
          rounded
          bordered
          state="success"
          minlength="7"
          v-model="testVal"
        />
      </div>

      <br />
      <br />
      <br />

      <div>
        <FInput
          placeholder="Full Name"
          label="Name"
          type="text"
          success-message="Name is available!"
          error-message="Name should be of minimum 7 characters"
          lazy
          rounded
          size="md"
          state="error"
          v-model="testVal"
        />
        <br />
        <FInput
          placeholder="Full Name"
          label="Name"
          type="text"
          success-message="Name is available!"
          error-message="Name should be of minimum 7 characters"
          bordered
          lazy
          rounded
          size="md"
          v-model="testVal"
        />
      </div>

      <br />
      <br />
      <br />

      <div>
        <FInput
          placeholder="Full Name"
          label="Name"
          type="text"
          success-message="Name is available!"
          error-message="Name should be of minimum 7 characters"
          bordered
          lazy
          size="sm"
          rounded
          v-model="testVal"
        />
        <br />
        <FInput
          placeholder="Full Name"
          label="Name"
          type="text"
          success-message="Name is available!"
          error-message="Name should be of minimum 7 characters"
          lazy
          size="sm"
          rounded
          v-model="testVal"
        />
      </div>

      <!-- <FButton label="submit" /> -->
    </form>
  </section>
</template>

<script setup>
import FInput from "../components/input/FInput.vue";
import FButton from "../components/button/FButton.vue";
import { ref } from "vue";
let testVal = ref("Ammar");

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
  width: 500px;
}
</style>
