<template>
  <div>
    <Login v-show="showOffData" @toggleViews="toggleViews" />
    <router-view v-show="routerShow" @toggleViews="toggleViews"></router-view>
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
    name: "App",
    components: {
      Login
    },
    data() {
      return {
        showOffData: true,
        routerShow: false,
      }
    },
    methods : {
      toggleViews() {
        this.showOffData = false;
        this.routerShow = true;
      }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&family=Poppins:wght@100;200;300;400;500&display=swap');

  * {
    font-family: "Poppins", sans-serif;
  }

  *::selection {
    background-color: transparent;
  }
  *::focus {
    outline: none;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    overflow-x: hidden;
  }
</style>
