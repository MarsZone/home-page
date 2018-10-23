<template>
  <div id="app">
    <!-- 页面切换 -->
    <transition name="fade" mode="out-in">
      <router-view v-if="!menu_show"/>
    </transition>
    <!-- 菜单栏 -->
    <transition name="flipOutX">
      <div class="menu_box" v-on:click='onclick' v-if="menu_show">
        <circle-menu ref = 'circleMenu'></circle-menu>
      </div>
    </transition>
  </div>
</template>

<script>
import circleMenu from "@/components/Menu.vue";
export default {
  data() {
    return {
      checkbox_checked: false,
      menu_show: true
    };
  },
  components: {
    circleMenu
  },
  mounted: function() {
    //设置全局颜色
    $("body").css({ "background-color": "#000" });
    setTimeout(function() {
      $("body").addClass("loaded");
      setTimeout(function() {
        $("#loader-wrapper").remove();
      }, 1000);
    }, 1000);

    // var ishome = this.$route.name == 'home';
    // if(ishome == false){
    //   this.menu_show = false;
    // };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: function() {
      var moduleEnum = ["mars", "about", "lang"];
      console.log();
      if (!moduleEnum.includes(this.$store.state.moduleState.currentModule)) {
        this.menu_show = true;
      }
    }
  },
  methods: {
    onclick: function(e) {
      // console.log(e.target.className);
      if (
        e.target.className != "menu-open-button" &&
        e.target.className != "menu-open"
      ) {
        this.$refs.circleMenu.hideMenu();
        if ($(e.target).hasClass("menu-item")) {
          setTimeout(() => {
            //点击到其他模块
            this.$store.commit("moduleState/updateModule", "other");
            this.menu_show = false;
          }, 200);
        }
      }
    }
  }
};
</script>


<style lang="less">
  @import "./assets/css/app.less";
</style>
