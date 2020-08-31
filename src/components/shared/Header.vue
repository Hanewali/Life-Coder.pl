<template>
  <v-app-bar app flat absolute>
    <v-container>
      <v-row>
        <v-col cols="2">
          <router-link to="/" tag="a">
          <v-toolbar-title id="header-title">Life-Coder.pl</v-toolbar-title>
          </router-link>
        </v-col>
        <v-col cols="1">
          <router-link to="/" tag="a">
          <v-btn text>Home</v-btn>
          </router-link>
        </v-col>
        <v-col cols=1>
          <v-btn text>Kontakt</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return { };
  }
};
</script>

<style scoped>

.v-toolbar__title {
  font-size: 1.5em;
}
</style>