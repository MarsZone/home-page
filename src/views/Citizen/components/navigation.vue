<template>
    <!-- 导航栏 -->
    <div class="navigation">
      <div class="nav-container">
        <div class="brand">
          <img class='img-logo' src="../image/clogo.svg" href="#mgow"/>
        </div>
        <nav>
          <div class="nav-mobile" >
            <a id="nav-toggle" v-on:click="showList = !showList"
                               v-bind:class="{ active: showList }">
              <span></span>
            </a>
          </div>
          <ul class="nav-list" v-click-outside='closeEvent' v-show="showList" >
            <li v-for="(item,index) in menuList" :key="item.key" @click="menuClick(item,index)" >
                <router-link :to=item.href v-if="item.key != '1'">{{ $t('city.nav.'+item.title) }}</router-link>
                <a :href=item.href v-if="item.key == '1'">{{ $t('city.nav.'+item.title) }}</a>
                <!-- 有子菜单的 -->
                <ul class="nav-dropdown" v-if="item.dropDown" v-show="item.isShow">
                  <li v-for="subTitle in item.dropDown" :key="subTitle.title">
                    <router-link :to=subTitle.href>{{$t('city.nav.'+subTitle.title)}}</router-link>
                  </li>
                  <div class="corner-upper-left"></div>
                  <div class="corner-upper-right"></div>
                  <div class="corner-bottom-right"></div>
                  <div class="corner-bottom-left"></div>
                </ul>
            </li>
            <li>
              <a><font-awesome-icon prefix="far" icon="user-circle"/></a>
            </li>
            <li>
              <a><langSwitch></langSwitch></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
import langSwitch from './langSwitch';
export default {
  data: function() {
    return {
      showList: false,
      showNavDropDown: false,
      menuList: [
        { href: "/", title: "home", key: "1" },
        {
          href: "",
          title: "work.title",
          key: "2",
          dropDown: [],
          isShow: false
        },
        {
          href: "",
          title: "market.title",
          key: "3",
          dropDown: [],
          isShow: false
        },
        { href: "building", title: "about", key: "4" }
      ]
    };
  },
  mounted: function() {
    var workDropDown = [
      { href: "", title: "work.hire" },
      { href: "", title: "work.findwork" }
    ];
    var marketDropDown = [
      { href: "", title: "market.civil" },
      { href: "", title: "market.military" }
    ];
    this.menuList.forEach(function(value) {
      value.key == "2" ? (value.dropDown = workDropDown) : "";
      value.key == "3" ? (value.dropDown = marketDropDown) : "";
    });
  },
  methods: {
    closeEvent: function(event) {
      // console.log('close event called');
      this.hideAllSubMenu();
    },
    menuClick: function(item, index) {
      this.hideAllSubMenu();
      item.isShow = !item.isShow;
    },
    hideAllSubMenu: function() {
      // console.log(this.menuList);
      this.menuList.forEach(function(value, key, arr) {
        value.isShow = false;
      });
    }
  },
  components: {
    langSwitch
  },
  
};
</script>
<style lang="less" scoped>
.img-logo {
  padding-top: 23%;
}
@import "../style/nav.less";
</style>

