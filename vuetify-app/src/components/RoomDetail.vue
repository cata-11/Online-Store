<template>
  <v-container class="mx-auto">
    <br />
    <br />
    <br />
    <v-carousel cycle continuous height="70vh" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="img in room.images" :key="img.id" :src="img"></v-carousel-item>
    </v-carousel>
    <v-sheet elevation="5" class="pa-10" rounded>
      <h2 class="px-5 pb-5">{{room.title}}</h2>
      <p max-height="5px">{{room.details}}</p>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  props: ["room"],
  data() {
    return {};
  }
};
</script>

<style >
</style>
