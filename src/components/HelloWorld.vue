<template>
  <div>
    <h1 class="title is-spaced">
      {{ msg }}
    </h1>
    <p class="subtitle">
      This Vue.js app has
      <a href="http://www.typescriptlang.org/">TypeScript</a> support,<br/> is using the
      <a href="https://bulma.io/">Bulma CSS framework</a>
      <span class="tag is-success">Success</span> <span class="tag is-warning">Warning</span>,<br/> and pulls in
      <a href="https://fontawesome.com/">Font Awesome</a>
      <i class="fas fa-user"></i>
      <i class="fas fa-check"></i>
      <i class="fas fa-download"></i>.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloWord extends Vue {
  msg = "Welcome to Your Vue.js App";
}
</script>

<style lang="scss" scoped>
ul {
  list-style-position: inside;
}
</style>
