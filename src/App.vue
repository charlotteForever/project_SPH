<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- 设置footer组件条件渲染 -->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 程序一运行起来就把数据存在仓库的categoryList里面
    this.$store.dispatch("getCategory");
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
