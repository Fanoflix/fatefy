<template>
  <section>
    <main>
      <h1>Buttons</h1>
    </main>
    <p>
      By default, a button is of 'primary' type, 'md' size, not 'outlined' and
      not 'disabled'
    </p>

    <br />
    <h3>Types</h3>

    <div>
      <f-button label="Primary" />
      <f-button type="secondary" label="Secondary" />
      <f-button type="important" label="Important" />
      <f-button type="danger" label="Danger" />
    </div>

    <br />
    <h3>Sizes</h3>

    <div>
      <f-button label="Small Button" size="sm" type="primary"></f-button>
      <f-button label="Medium Button" size="md" type="secondary"></f-button>
      <f-button label="Large Button" size="lg" type="important"></f-button>
    </div>

    <br />
    <h3>Rounded</h3>

    <div>
      <f-button rounded size="sm" label="Primary" />
      <f-button rounded size="md" type="secondary" label="Secondary" />
      <f-button rounded size="lg" type="important" label="Important" />
      <f-button rounded size="lg" type="danger" label="Danger" />
    </div>

    <br />
    <h3>Outlined</h3>

    <div>
      <f-button outlined size="sm" label="Primary" />
      <f-button outlined size="md" type="secondary" label="Secondary" />
      <f-button outlined size="lg" type="important" label="Important" />
      <f-button outlined rounded size="lg" type="danger" label="Danger" />
    </div>

    <br />
    <h3>Caps</h3>

    <div>
      <f-button caps size="sm" label="Primary" />
      <f-button type="secondary" caps size="md" label="Secondary" />
      <f-button type="important" caps size="lg" label="Important" />
      <f-button type="danger" rounded caps size="lg" label="Danger" />
      <f-button label="Primary" caps size="sm" outlined />
      <f-button type="secondary" caps size="md" outlined label="Secondary" />
      <f-button type="important" caps size="lg" outlined label="Important" />
      <f-button type="danger" rounded caps size="lg" outlined label="Danger" />
    </div>

    <!-- <br />
    <h3>Disabled</h3>

    <div>
      <f-button :disabled="true" label="Primary" />
      <f-button disabled type="secondary" label="Secondary" />
      <f-button disabled type="important" label="Important" />
      <f-button disabled type="danger" label="Danger" />
      <f-button :disabled="true" outlined label="Primary" />
      <f-button disabled outlined type="secondary" label="Secondary" />
      <f-button disabled outlined type="important" label="Important" />
      <f-button disabled outlined type="danger" label="Danger" />
    </div>

    <br />
    <h3>Caps</h3>

    <div>
      <f-button caps size="sm" label="Primary" />
      <f-button type="secondary" caps size="md" label="Secondary" />
      <f-button type="important" caps size="lg" label="Important" />
      <f-button type="danger" rounded caps size="lg" label="Danger" />
      <f-button label="Primary" caps size="sm" outlined />
      <f-button type="secondary" caps size="md" outlined label="Secondary" />
      <f-button type="important" caps size="lg" outlined label="Important" />
      <f-button type="danger" rounded caps size="lg" outlined label="Danger" />
    </div> -->
  </section>
</template>

<script setup>
import FButton from "../components/button/FButton.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

button {
  margin: 4px 7px;
  margin-left: 0;
}
section {
  width: $global-center-content-width;
}

div {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
