<template>
  <div id="app">
    <!-- <img src="../assets/logo.png"> -->
    <span>这是在商品列表中</span>
    <router-link to='/good/title' >显示商品标题</router-link>

    <router-view ></router-view>
    <router-link to ="/cart">跳转到购物车</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
