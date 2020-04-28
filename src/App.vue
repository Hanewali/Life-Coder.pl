<template>
  <div id="app">
    <app-header></app-header>
    <app-git-presentation></app-git-presentation>
  </div>
</template>

<script>
import Header from './components/shared/Header'
import GitPresentation from './components/GitPresentation.md'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appGitPresentation: GitPresentation
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
