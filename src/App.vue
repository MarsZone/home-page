<template>
  <div id="app">
    <!-- 菜单栏 -->
    <!-- <transition name="flipOutX" v-on:after-leave="circleLeave">
      <div class="menu_box" v-on:click='onclick' v-if="menu_show">
        <circle-menu ref = 'circleMenu'></circle-menu>
      </div>
    </transition> -->
    <!-- 页面切换 -->
    <!-- <transition name="fade" mode="in-out">
      <router-view v-if="view_show"/>
    </transition> -->
    <router-view v-if="view_show"/>
  </div>
</template>

<script>
import circleMenu from "@/components/Menu.vue";
export default {
  data() {
    return {
      checkbox_checked: false,
      view_show: true,
      menu_show: true
    };
  },
  components: {
    circleMenu
  },
  mounted: function() {
    //设置全局颜色
    // $("body").css({ "background-color": "#000" });
    // setTimeout(function() {
    //   $("body").addClass("loaded");
    //   setTimeout(function() {
    //     $("#loader-wrapper").remove();
    //   }, 1000);
    // }, 500);
    // this.ifShowMenu(this.$router.currentRoute.name);
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: function(to,from) {
      // this.ifShowMenu(this.$router.currentRoute.name);
    }
  },
  methods: {
    ifShowMenu:function(currentModule){
      var moduleEnum = ["citizen", "about", "lang"];
      if (!moduleEnum.includes(currentModule)) {
        this.menu_show = true;
      }else{
        this.menu_show = false;
      }
      this.view_show =! this.menu_show;
    },
    circleLeave:function(el,done){
      this.view_show=true;
    },
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
