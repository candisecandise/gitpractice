<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  height: 100%;
}
</style>
