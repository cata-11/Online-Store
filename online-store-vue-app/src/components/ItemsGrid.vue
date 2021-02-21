<template>
  <div class="row">
    <Item v-for="item in 4" :key="item.id" />
  </div>
</template>
<script>
import Item from "@/components/Item";
export default {
  components: {
    Item
  }
};
</script>
<style scoped>
* {
  width: 95vw;
}
</style>