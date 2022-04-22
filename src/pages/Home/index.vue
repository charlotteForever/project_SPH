<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommand />
    <Rank />
    <Like />
    <!-- props传递数据 -->
    <Floor v-for="(floor, index) in floorList" :key="index" :floor="floor" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommand from "./Recommand";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommand,
    Rank,
    Like,
    Floor,
    Brand,
  },

  data() {
    return {};
  },

  created() {
    this.$store.dispatch("getFloor");
  },

  computed: {
    ...mapState({
      floorList: (state) => {
        return state.homeOptions.floorList;
      },
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>