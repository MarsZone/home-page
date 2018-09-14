<template>
  <div class="home-page" >
    <!-- 导航栏 -->
    <div class="navigation">
      <div class="nav-container">
        <div class="brand">
          <a href="#mgow">Logo</a>
        </div>
        <nav>
          <div class="nav-mobile" >
            <a id="nav-toggle" v-on:click="showList = !showList"
                               v-bind:class="{ active: showList }">
              <span></span>
            </a>
          </div>
          <ul class="nav-list" v-click-outside='closeEvent' v-show="showList">
            <li v-for="item in menuList" :key="item.title" v-on:click="item.isShow = !item.isShow" >
                <router-link :to=item.href>{{item.title}}</router-link>
                <!-- 有子菜单的 -->
                <ul class="nav-dropdown" v-if="item.dropDown" v-show="item.isShow">
                  <li v-for="subTitle in item.dropDown" :key="subTitle.title">
                    <router-link :to=subTitle.href>{{subTitle.title}}</router-link>
                  </li>
                </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>


    <h1>MGOW</h1>
    <router-link to="/" class="menu-item blue">
      <Button type="success" v-on:click="backHome">返回主页</Button>
    </router-link>
  </div>
</template>
<script>
  export default {
    data:function(){
      return{
        showList:false,
        showNavDropDown:false,
        menuList:[
        {href :'home',title :'Home'},
        {href :'about',title :'About'},
        {href :'',title :'Services',dropDown:[],isShow:false},
        {href :'about',title :'Pricing'},
        {href :'',title :'Portfolio',dropDown:[],isShow:false},
        {href :'about',title :'Contact'}]
      }
    },
    beforeCreate: function () {
      this.$store.commit("viewState/updateView", "MGOW");
    },
    mounted:function(){
      var ServicesDropDown = [{href :'about',title :'Web Design'},
                              {href :'',title :'Web Development'},
                              {href :'',title :'Graphic Design'}];
      this.menuList.forEach(function(value,key,arr){
        value.title == 'Services' ? value.dropDown = ServicesDropDown:'';
        value.title == 'Portfolio' ? value.dropDown = ServicesDropDown:'';
      });
    },
    methods: {
      backHome: function () {
        this.$store.commit("viewState/updateView", "home");
      },
      closeEvent:function(event){
        // console.log('close event called');
        this.menuList.forEach(function(value,key,arr){
          value.isShow=false;
        });
        // this.showList=false;
      }
    }
  }

  ;
</script>
<style lang="less" scoped>
  @import "style/nav.less";
  h1 {
    text-align: center;
    padding-top: 20px;
  }
</style>