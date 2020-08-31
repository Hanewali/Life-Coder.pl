<template>
  <div id="app">
    <v-app>
        <app-header></app-header>
        <router-view></router-view>
    </v-app>
  </div>
</template>

// <script>
import Header from './components/shared/Header'

export default {
  name: 'App',
  components: {
    appHeader: Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
