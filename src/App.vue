<template>
  <div id="app">
    
    <transition name="flipOutX">
      <div class="menu_box" v-on:click='onclick' v-if="menu_show">
        <circle-menu ref = 'circleMenu'></circle-menu>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view v-if="!menu_show"/>
    </transition>
  </div>
</template>

<script>
import circleMenu from '@/components/Menu.vue'

export default {
  data(){
    return{
      checkbox_checked:false,
      menu_show:true,
    }
  },
  components: {
    circleMenu
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': function(){
      if(this.$store.state.viewState.currentView == 'home'){
         this.menu_show=true;
      }
    }
  },
  methods:{
    onclick:function(e){
      console.log(e.target.className);
      if(e.target.className != 'menu-open-button' && e.target.className != 'menu-open'){
        this.$refs.circleMenu.hideMenu();
        if($(e.target).hasClass('menu-item'))
        {
           setTimeout(() => {
            this.$store.commit('viewState/updateView','other');
            this.menu_show=false;
           }, 200);
        }
      }
    }
  }
}
</script>


<style lang="less">

.menu_box{
  width: 100%;
  height: 100%;
  position: absolute;
  background: #2c3e50;
  z-index: -1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    font-size: 1.2em;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.flipOutX-leave-active {
  animation-duration: 0.75s;
  animation-name: flipOutX;
  backface-visibility: visible !important;
}
.flipOutX-enter-active{
  animation-duration: 0.75s;
  animation-name: flipInX;
}

@keyframes flipOutX {
  from {
    transform: perspective(400px);
  }

  // 30% {
  //   transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
  //   opacity: 1;
  // }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
@keyframes flipInX {
  from {
    transform: perspective(400px);
    opacity: 0;
  }
  to {
    transform: perspective(400px);
    opacity: 1;
  }
}

</style>
