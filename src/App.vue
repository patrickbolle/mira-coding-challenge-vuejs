<template>
  <div id="app">
    <navbar></navbar>
    <grid></grid>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Grid from './components/Grid.vue';

export default {
  components: {
    Navbar,
    Grid
  }
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
</style>
