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
          ref="myRef"
        />
        <FInput
          type="text"
          label="Username"
          placeholder="Display name"
          required
          minlength="3"
          maxlength="20"
          hasCounter
          rounded
          validation-message="Minimum 3 characters and maximum 8 characters."
          success-message="Username is available!"
          size="md"
        />
        <FInput
          type="email"
          label="Email"
          placeholder="user@email.com"
          required
          minlength="3"
          size="md"
          validation-message="Email should be of correct format."
          success-message="Valid!"
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
        <FInput
          type="textarea"
          label="A little bit about you (optional)"
          rounded
          size="md"
        />
      </div>
      <div class="buttons">
        <FButton label="Create Account" size="lg" rounded />
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
import { onMounted, ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import FButton from "../components/button/FButton.vue";
import FInput from "../components/input/FInput.vue";

// Reactive State
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
const myRef = ref(null);

// Lifecycle Hooks
onMounted(() => {
  myRef.value.input.focus();
});

// onBeforeRouteLeave((to, from) => {
//   // TODO
//   // if all fields are not empty (Composable)
//   // if all promises are resolved (Composable)
//   // then:
//   // show the snackbar component instead of confirm()
//   const answer = confirm("Are you sure you want to leave?");
//   if (!answer) return false;
// });
</script>

<style scoped lang="scss">
.signup {
  // margin-top: 15px;
  // padding: 15px;

  width: 460px;

  display: flex;
  align-items: center;
  flex-direction: column;
}

form {
  width: 100%;
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
