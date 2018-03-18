<template>
  <div id="app-container" class="container has-text-centered">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script lang="ts">
import fontawesome from "@fortawesome/fontawesome";
import {
  faUser,
  faCheck,
  faDownload
} from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(faUser, faCheck, faDownload);

import "bulma";

export default {
  name: "App"
};
</script>

<style lang="scss">
$font-stack: "Avenir", Helvetica, Arial, sans-serif;

#app-container {
  font-family: $font-stack;
}
</style>
