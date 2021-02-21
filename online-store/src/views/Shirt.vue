<template>
  <div>
    <OnlyProduct :shirt="shirt" />
  </div>
</template>

<script>
import OnlyProduct from "@/components/OnlyProduct";
export default {
  components: {
    OnlyProduct
  },
  data() {
    return {
      shirt: {}
    };
  },
  async mounted() {
    try {
      const res = await fetch(
        `https://onlinestore-1e7fa.firebaseio.com/products/-MFu88OG0aJnXdAxMhcE/${this.$route.params.id}.json`
      );
      const json = await res.json();
      this.shirt = json;
    } catch (e) {
      console.log(e);
    }
  },

  created() {
    setTimeout(() => {
      console.log(this.shirt);
    }, 5000);
  }
};
</script>

<style scoped>
</style>