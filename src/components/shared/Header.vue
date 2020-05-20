<template>
  <v-app-bar
    app>
    <v-container>
    <v-row>
      <v-col cols="2">
        <v-img max-height="100%" contain :src="image_src" id="site-logo"></v-img>
      </v-col>
      <v-col cols=10>
        <v-btn text>test</v-btn>
      </v-col>
    </v-row>
    </v-container>
  </v-app-bar>
  <!-- <div id="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand ml-5 mr-5" href="#"><img src="../../assets/shared/header/logo.png" alt="Life-Coder.pl logo file"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="https://life-coder.pl/">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div> -->
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      image_src: require("../../assets/shared/header/logo.png")
    }
  }
};
</script>

<style scoped>

</style>