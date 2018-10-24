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
                <router-link :to=item.href>{{item.title}}</router-link>
                <!-- 有子菜单的 -->
                <ul class="nav-dropdown" v-if="item.dropDown" v-show="item.isShow">
                  <li v-for="subTitle in item.dropDown" :key="subTitle.title">
                    <router-link :to=subTitle.href>{{subTitle.title}}</router-link>
                  </li>
                  <div class="corner-upper-left"></div>
                  <div class="corner-upper-right"></div>
                  <div class="corner-bottom-right"></div>
                  <div class="corner-bottom-left"></div>
                </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
    data:function(){
      return{
        showList:false,
        showNavDropDown:false,
        menuList:[
        {href :'citizen',title :'Home',key:'1'},
        {href :'/',title :'Menu',key:'2'},
        {href :'',title :'Services',key:'3',dropDown:[],isShow:false},
        {href :'',title :'Portfolio',dropDown:[],isShow:false},
        {href :'about',title :'Contact',key:'4'},
        {href :'about',title :'About',key:'5'}]
      }
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
      closeEvent:function(event){
        // console.log('close event called');
        this.hideAllSubMenu();
      },
      menuClick:function(item,index){
        this.hideAllSubMenu();
        item.isShow = !item.isShow;
      },
      hideAllSubMenu:function(){
        // console.log(this.menuList);
        this.menuList.forEach(function(value,key,arr){
          value.isShow=false;
        });
      }
    }
}
</script>
<style lang="less" scoped>
  .img-logo{
    padding-top: 23%;
  }
  @import "../style/nav.less";
</style>

