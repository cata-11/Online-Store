<template>
  <v-container class="mx-auto">
    <Carousel />
    <br />
    <About />
  </v-container>
</template>

<script>
import Carousel from "@/components/Carousel";

import About from "@/components/About";
export default {
  components: {
    Carousel,
    About
  }
};
</script>

