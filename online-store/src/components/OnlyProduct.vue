<template>
  <div>
    <h2>YO</h2>
    <h3>{{shirt.title}}</h3>
    <img :src="shirt.url" />
  </div>
</template>

<script>
export default {
  props: ["shirt"]
};
</script>
<style scoped>
</style>