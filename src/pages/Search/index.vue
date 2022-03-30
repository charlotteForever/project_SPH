<template>
  <div>
    我是search组件,
    <h3>params类型的参数：{{ $route.params.keyword }}</h3>
    <h3>query类型的参数：{{ $route.query.keyword }}</h3>
  </div>
</template>

<script>
export default {
  name: "Search",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>