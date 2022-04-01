<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 把全部商品分类和下面的列表放在一个父盒子里，利用事件委派使得：
      鼠标从index为0的标签上移动到，本该index为-1的在“全部商品分类”时，mouseleave不触发 -->
      <div @mouseleave="handleLeave">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2">
            <!-- 动态确定样式 -->
            <div
              class="item bo"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              @mouseenter="handleEnter(index)"
              :class="{ cur: curIndex === index }"
            >
              <h3>
                <a href="">{{ c1.categoryName }}--{{ index }}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <!-- c2有效的作用域要包含c3，因为c3依靠c2而存在 -->
                  <dl
                    class="fore"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dt>
                      <a href="">{{ c2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a href="">{{ c3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      curIndex: -1,
    };
  },
  methods: {
    // 鼠标在上，记录下index到curIndex，如果相等，类名改为curStyle
    // handleEnter(index) {
    //   this.curIndex = index;
    //   console.log(index);
    // },
    handleEnter: throttle(function (index) {
      this.curIndex = index;
      console.log(index);
    }, 50),
    handleLeave() {
      // curIndex置为-1，使动态的class样式失效
      this.curIndex = -1;
    },
  },

  mounted() {
    // template挂载完成之后，dispatch(这里不能向服务器发请求，业务操作在actions里面)
    this.$store.dispatch("getCategory");
  },
  computed: {
    ...mapState({
      // mapstate的对象形式，右侧是一个函数，参数是大仓库的state
      categoryList: (state) => {
        return state.homeOptions.categoryList;
      },
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }

  .cur {
    background-color: skyblue;
  }
}
</style>