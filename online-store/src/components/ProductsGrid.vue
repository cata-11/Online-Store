<template>
  <div class="row">
    <ProductSolo v-for="shirt in shirts" :key="shirt.id" :shirt="shirt" />
  </div>
</template>

<script>
import ProductSolo from "@/components/ProductSolo";
export default {
  components: {
    ProductSolo
  },
  data() {
    return {
      shirts: [
        {
          id: 0,
          img: "",
          title: "NewShirt",
          price: "40$"
        },
        {
          id: 1,
          img: "",
          title: "NewShirt",
          price: "40$"
        },
        {
          id: 2,
          img: "",
          title: "NewShirt",
          price: "40$"
        },
        {
          id: 3,
          img: "",
          title: "NewShirt",
          price: "40$"
        },
        {
          id: 4,
          img: "",
          title: "NewShirt",
          price: "40$"
        },
        {
          id: 5,
          img: "",
          title: "NewShirt",
          price: "40$"
        },
        {
          id: 6,
          img: "",
          title: "NewShirt",
          price: "40$"
        }
      ]
    };
  }
};
</script>


<style>
</style>
