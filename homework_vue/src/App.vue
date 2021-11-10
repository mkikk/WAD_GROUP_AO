<template>
  <div id="app">
    <header-compo></header-compo>
    <router-view />
    <footerCompo></footerCompo>
  </div>
</template>
<script>
import footerCompo from "@/components/footerCompo.vue";
import HeaderCompo from "./components/headerCompo.vue";
export default {
  name: "App",
  components: {
    footerCompo,
    HeaderCompo,
  },
};
</script>

HeaderCompo
<style HeaderCompostyle lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #1778bd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.headerfooter {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
