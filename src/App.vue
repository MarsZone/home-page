<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkbox_checked: false,
    };
  },
  mounted: function() {
    //设置全局颜色
    this.$i18n.locale = 'en'
    var body = document.body
    // // body.style.backgroundColor = "#000"
    // setTimeout(function() {
    //   body.classList.add("loaded");
    //   setTimeout(function() {
    //     body.removeChild("#loader-wrapper");
    //   }, 1000);
    // }, 500);
  },
}
</script>
<style lang="less">
  @import "./assets/app.less";
</style>
