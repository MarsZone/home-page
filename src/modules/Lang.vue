<template>
  <div class="home">
    <div class="core-box">
      <!-- <core id='core'></core> -->
    </div>
    <h1>{{ $t("home.index") }} {{ $t("msg.welcome") }}</h1>

    <Button type="success" v-on:click="changeLocale">切换语言</Button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import core from '@/components/SquareCore.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
     core
  },
  beforeCreate: function () {
      this.$store.commit("moduleState/updateModule", "lang");
  },
  methods:{
    changeLocale :function(){
      this.$i18n.locale == 'en' ? this.$i18n.locale = 'zh': this.$i18n.locale = 'en';
      // var char = this.$t("home.index"); 代码里调用
    }
  }
}
</script>
<style lang="less" scoped>
  h1{
    text-align: center;
    padding-top: 20px;
  }
  // .core-box{
  //   margin: auto;
  //   position: absolute;
  //   left: 0px;
  //   right: 0px;
  //   top: 40px;
  //   width: 40px;
  //   height: 40px;
  // }

</style>
