<template>
  <section class="signup">
    <main>
      <h1>Signup</h1>
    </main>
    <form @submit.prevent>
      <div class="inputs">
        <FInput
          type="text"
          label="Fullname"
          placeholder="Full name"
          required
          minlength="3"
          rounded
          size="md"
        />
        <FInput
          type="text"
          label="Username"
          placeholder="Full name"
          required
          minlength="3"
          maxlength="8"
          hasCounter
          rounded
          size="md"
        />
        <FInput
          type="email"
          label="Email"
          placeholder="user@email.com"
          required
          minlength="3"
          size="md"
          rounded
        />
        <FInput
          type="password"
          minlength="3"
          label="Password"
          rounded
          required
          size="md"
        />
        <FInput
          type="password"
          minlength="3"
          label="Confirm Password"
          required
          rounded
          size="md"
        />
      </div>
      <div class="buttons">
        <FButton label="Create Account" size="md" rounded />
      </div>
    </form>
  </section>
</template>

<script setup>
/* 
  imports
*/
import { useThemeStore } from "../stores/theme.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import FButton from "../components/button/FButton.vue";
import FInput from "../components/input/FInput.vue";

const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);

onMounted(() => {
  console.log("Singup mounted");
});
</script>

<style scoped lang="scss">
.signup {
  margin-top: 15px;
  padding: 15px;

  width: 500px;

  display: flex;
  align-items: center;
  flex-direction: column;
}
form {
  width: 300px;

  .inputs {
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-flow: nowrap column;

    .control {
      margin: 10px 0px;
    }
  }

  .buttons {
    margin-top: 10px;
    display: flex;
    flex-flow: nowrap column;

    button {
      margin: 2px 0px;
    }
  }
}
</style>
