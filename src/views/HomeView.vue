<template>
  <section>
    <main><h1>Home</h1></main>
    <FContainer
      heading="Test"
      padding="2"
      width="500px"
      height="600px"
      heading-center
      rounded
      wrap
      class="test"
    >
      <p>testing</p>

      <div>
        <FButton label="test" expanded type="primary" rounded></FButton>
        <FButton label="test" type="secondary" rounded></FButton>
        <FButton label="test" type="important" rounded></FButton>
        <FButton label="test" type="danger" rounded></FButton>

        <FButton label="test" type="primary" rounded outlined></FButton>
        <FButton label="test" type="secondary" rounded outlined></FButton>
        <FButton label="test" type="important" rounded outlined></FButton>
        <FButton label="test" type="danger" rounded outlined></FButton>
      </div>
    </FContainer>
  </section>
</template>

<script setup>
import FContainer from "../components/container/FContainer.vue";
import FButton from "../components/button/FButton.vue";
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.test {
}
</style>
