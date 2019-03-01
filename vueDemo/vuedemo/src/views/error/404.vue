<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="bullshit">
        <div class="bullshit__headline">{{ message }}</div>
        <div class="bullshit__info">请检查您输入的网址是否正确，请点击以下按钮返回主页</div>
        <router-link to="/" class="bullshit__return-home">返回首页</router-link>
        <button @click="logout">退出</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page404",
  computed: {
    message() {
      return "404";
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/login");
    }
  }
};
</script>
