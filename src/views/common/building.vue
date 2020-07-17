<template>
  <div class="building">
      <div class="center">
        <p>建设中</p>
        <router-link to="/">返回首页</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.building{
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100vh;
    .center{
        p{
            text-align: center;
        }
    }
}
</style>