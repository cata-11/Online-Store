<template>
  <div id="home">
    <!--products-grid-->
    <ProductsGrid />
  </div>
</template>

<script>
import ProductsGrid from "@/components/ProductsGrid";
export default {
  props: ["index"],
  components: {
    ProductsGrid
  }
};
</script>


<style>
</style>
