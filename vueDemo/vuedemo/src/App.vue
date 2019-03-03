<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { constantRouter, dynamicRouter } from "@/router/index";
import { getToken } from "@/utils/auth"; // getToken from cookie
import store from "@/store";
export default {
  name: "app",
  created() {
    console.log(1111111111111);
    this.judgeLogin();
  },
  methods: {
    judgeLogin() {
      // let isLogin = store.state.token.name;
      let isLogin;
      if (getToken()) {
        isLogin = JSON.parse(getToken());
      }
      console.log(isLogin);
      if (!isLogin) {
        return this.$router.push("/login");
      } else {
        let dR = new Array();
        for (let i = 0; i < dynamicRouter.length; i++) {
          for (let j = 0; j < dynamicRouter[i].meta.roles.length; j++) {
            if (dynamicRouter[i].meta.roles[j] == isLogin.name) {
              dR.push(dynamicRouter[i]);
            }
          }
        }
        this.$router.addRoutes(dR);
      }
    }
  },
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
