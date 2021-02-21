<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>
<style>
* {
  margin: 0;
  font-family: "Balsamiq Sans", cursive;
  color: rgb(77, 75, 75);
  overflow-x: hidden;
}
</style>
