<template>
  <div id="app">
  
      <Download/>
      <PageIndex/>
  </div>
</template>

<script>
import Download from "./components/Download.vue";
import PageIndex from "./pages/index/PageIndex.vue";

export default {
  name: "App",
  components: {
    Download,
    PageIndex
  }
};
</script>

<style lang="scss">
@for $i from 300px through 750px {
  @media screen and (device-width: $i) {
    html {
      font-size: 2 * $i/75;
    }
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  max-width: 100%;
  overflow: hidden;
}
</style>
