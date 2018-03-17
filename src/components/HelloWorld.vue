<template>
 <section class="section">
    <div class="container">
      <h1 class="title">
        {{ msg }}
      </h1>
      <p class="subtitle">
        This Vue.js app has TypeScript support and is using the <strong>Bulma</strong> CSS framework.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloWord extends Vue {
  msg = "Welcome to Your Vue.js App";
}
</script>

<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
