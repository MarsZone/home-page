<template>
  <div class="about">
    <div class='page'>
      <div class='section menu'></div>
      <div class='section header'>
        <img src='../assets/image/header.svg'/>
      </div>
      <div class='section content'>
        <img src='../assets/image/content.svg'/>
      </div>
      <div class='section sign-up'>
        <img src='../assets/image/sign-up.svg'/>
      </div>
      <div class='section feature-1'>
        <img src='../assets/image/feature.svg'/>
      </div>
      <div class='section feature-2'>
        <img src='../assets/image/feature.svg'/>
      </div>
      <div class='section feature-3'>
        <img src='../assets/image/feature.svg'/>
      </div>
    </div>
    
    
    <h1>关于</h1>
    <router-link to="/" class="menu-item blue">
      <Button type="success" v-on:click="backHome">返回主页</Button>
    </router-link>
  </div>
</template>
<script>
export default {
  methods:{
  }
}
</script>

<style lang="less" scoped>
  h1{
    text-align: center;
    padding-top: 20px;
  }
  .page {
    display: flex;
    flex-wrap: wrap;
  }

  .section {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu {
    background-color: #5995DA;
    height: 80px;
  }

  .header {
    background-color: #B2D6FF;
  }

  .content {
    background-color: #EAEDF0;
    height: 600px;
  }

  .sign-up {
    background-color: #D6E9FE;
  }

  .feature-1 {
    background-color: #F5CF8E;
  }

  .feature-2 {
    background-color: #F09A9D;
  }

  .feature-3 {
    background-color: #C8C6FA;
  }
  /* Mobile Styles */
  @media only screen and (max-width: 400px) {
    .about {
      background-color: #F09A9D; /* Red */
    }
  }

  /* Tablet Styles */
  @media only screen and (min-width: 401px) and (max-width: 960px) {
    .about {
      background-color: #F5CF8E; /* Yellow */
    }
    .sign-up,
    .feature-1,
    .feature-2,
    .feature-3 {
      width: 50%;
    }
  }

  /* Desktop Styles */
  @media only screen and (min-width: 961px) {
    .about {
      background-color: #77c8d3; /* Blue */
    }
    .page {
      width: 960px;
      margin: 0 auto;
    }
    .feature-1,
    .feature-2,
    .feature-3 {
      width: 33.3%;
    }
    .header {
      height: 400px;
    }
    .sign-up {
      height: 200px;
      order: 1;
    }
    .content {
      order: 2;
    }
  }
</style>

