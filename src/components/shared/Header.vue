<template>
  <v-app-bar app flat>
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-toolbar-title id="header-title">Life-Coder.pl</v-toolbar-title>
        </v-col>
        <v-col cols="1">
          <v-btn text>Home</v-btn>
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