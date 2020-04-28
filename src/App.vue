<template>
  <div id="app">
    <app-header></app-header>
    <img alt="Vue logo" src="./assets/icon.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/shared/Header'

export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
