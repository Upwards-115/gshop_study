<template>
  <footer class="footerContainer border-1px">
    <div :class="{active: $route.path === '/msite'}" @click="goPath('/msite')" class="guide_item">
      <i class="iconfont icon-waimai"></i>
      <span>首页</span>
    </div>
    <div :class="{active: $route.path === '/search'}" @click="goPath('/search')" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </div>
    <div :class="{active: $route.path === '/order'}" @click="goPath('/order')" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </div>
    <div :class="{active: $route.path === '/profile'}" @click="goPath('/profile')" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </div>
<!--    <a href="" class="guide_item on">-->
<!--      <span class="item_icon">-->
<!--        <i class="iconfont icon-waimai"></i>-->
<!--      </span>-->
<!--      <span>外卖</span>-->
<!--    </a>-->
<!--    <a href="../../pages/Search/Search.vue" class="guide_item">-->
<!--      <span class="item_icon">-->
<!--        <i class="iconfont icon-search"></i>-->
<!--      </span>-->
<!--      <span>搜索</span>-->
<!--    </a>-->
<!--    <a href="../../pages/Order/Order.vue" class="guide_item">-->
<!--      <span class="item_icon">-->
<!--        <i class="iconfont icon-dingdan"></i>-->
<!--      </span>-->
<!--      <span>订单</span>-->
<!--    </a>-->
<!--    <a href="" class="guide_item">-->
<!--      <span class="item_icon">-->
<!--        <i class="iconfont icon-geren"></i>-->
<!--      </span>-->
<!--      <span>我的</span>-->
<!--    </a>-->
  </footer>
</template>

<script>
export default {
  methods: {
    goPath (path) {
      path !== this.$route.path && this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus">
  @import "../../common/stylus/mixins.styl"
  @import "http://at.alicdn.com/t/font_518606_snabom9h9y1wz5mi.css"
  .footerContainer
    display flex
    top-border-1px(#eee)
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    box-sizing border-box
    background #fff
    .guide_item
      width 25%
      height 50px
      text-align center
      display flex
      flex-direction column
      &.active
        color $green
      .iconfont
        font-size 22px
        line-height 30px
</style>
