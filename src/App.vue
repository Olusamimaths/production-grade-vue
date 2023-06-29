<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld />
  <hr />
  <HelloWorld2 />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloWorld2 from "./components/HelloWorld2.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HelloWorld2,
  },
};
</script>

<style>
/* Challenge: Refactor these styles into a CSS class and combine it with CSS modules */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
