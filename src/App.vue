
<template>
  <div id="appContainer">
  <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import './router/index.js'

export default {
  name: 'app',
  components: {FooterGuide}
}
</script>
<style lang="stylus">
  @import "./common/stylus/mixins.styl"
</style>




