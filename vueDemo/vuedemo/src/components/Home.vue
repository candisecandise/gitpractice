<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <div class="fl title">管理后台</div>
        <div>
          <el-submenu index="1" class="fr">
            <template slot="title">{{name}}</template>
            <el-menu-item index="1-1" v-if="user" @click="logout">注销</el-menu-item>
          </el-submenu>
          <el-menu-item index="2" class="fr">处理中心</el-menu-item>
          <el-menu-item index="3" class="fr">消息中心</el-menu-item>
        </div>
      </el-menu>
    </el-header>

    <el-container>
      <el-aside>
        <el-menu
          :default-active="activeIndex2"
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <template
            v-for="route in $router.options.routes"
            v-if="route.children && route.children.length"
          >
            <template v-for="item in route.children">
              <el-menu-item :key="route.path + '/' + item.path" :index="item.name">
                <i class="el-icon-menu"></i>
                <span slot="title">{{ item.name }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <template>
          <router-view/>
        </template>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getToken, setToken, removeToken } from "@/utils/auth";
export default {
  data() {
    return {
      tableData: [],
      activeIndex1: "2-1",
      activeIndex2: "FirstPart"
    };
  },
  computed: {
    user() {
      if (getToken()) {
        var us = JSON.parse(getToken());
        return us.name;
      }
      // return this.$store.state.token.name;
    },
    name() {
      if (this.user) {
        return this.user;
      } else {
        return "请登录";
      }
      // if (this.$store.state.token.name) {
      //   return this.$store.state.token.name;
      // } else {
      //   return "请登录";
      // }
    }
  },
  methods: {
    login() {
      this.$router.replace("/login");
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.replace("/login");
      });
    },
    handleSelect(key, keyPath) {},
    handleClose(key, keyPath) {},
    handleOpen(key, keyPath) {}
  }
};
</script>

<style>
.fl {
  float: left;
}
.fr {
  float: right;
}
.title {
  width: 150px;
  text-align: center;
  line-height: 60px;
  color: #fff;
}
.el-aside {
  margin-left: 20px;
  width: 150px !important;
  height: 100%;
}
.el-menu-item {
  text-align: left;
}
</style>

