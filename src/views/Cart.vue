<template>
  <div id="app">
    <!-- <img src="../assets/logo.png"> -->
    <span>这是在购物中</span>

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
