<template>
  <AppNavbar />
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view />
</template>

<script>
// import AppNavbar from '@/modules/shared/components/AppNavbar';

import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  components: {
    AppNavbar: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "Navbar" */ "@/modules/shared/components/AppNavbar"
      )
    ),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
