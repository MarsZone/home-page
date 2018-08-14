<template>
  <div class="about">
    <h1>关于</h1>
    <router-link to="/" class="menu-item blue">
      <Button type="success" v-on:click="backHome">返回主页</Button>
    </router-link>
    
  </div>
</template>
<script>
export default {
  beforeCreate:function(){
    this.$store.commit('viewState/updateView','about');
  },
  methods:{
    backHome:function(){
      this.$store.commit('viewState/updateView','home');
    }
  }
}
</script>

<style lang="less" scoped>
  h1{
    text-align: center;
    padding-top: 20px;
  }
</style>

