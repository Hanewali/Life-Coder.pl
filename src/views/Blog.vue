<template>
  <div class="blog">
    <router-view />
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.blog {
  max-width: 50vw;
  margin: 10rem auto;
}
</style>