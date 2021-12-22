<template>
  <div id="app">
    <Home></Home>
    <About></About>
  </div>
</template>

<script>
import Home from "./views/Home";
import About from "./views/About";

export default {
  components: { Home, About },
  name: "App",
};
</script>

<style lang="less" scoped>
</style>