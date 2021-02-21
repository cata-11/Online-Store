<template>
  <div>
    <br />
    <br />
    <br />
    <v-carousel cycle continuous height="70vh" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="slide in slides" :key="slide.id" :src="slide.img"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: []
    };
  },
  mounted() {
    this.getSlides();
  },
  methods: {
    getSlides() {
      this.$http
        .get("https://rezervari-ccab3.firebaseio.com/Slides.json")
        .then(response => {
          return response.json();
        })
        .then(newSlides => {
          this.slides = newSlides;
        });
    }
  }
};
</script>

<style scoped>
</style>
