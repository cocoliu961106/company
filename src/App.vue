<template>
  <div id="app">
    <Navigation/>
    <div class="isolation"></div>
    <router-view></router-view>
    <Footer />
    <Copyright></Copyright>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'
  import Footer from './components/Footer'
  import Copyright from './components/Copyright'
export default {
  name: 'App',
    components: {Navigation, Footer, Copyright},
}
</script>

<style lang="stylus">
@import "./assets/style/common.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .isolation {
    margin-top: 96px;
  }
}
</style>
