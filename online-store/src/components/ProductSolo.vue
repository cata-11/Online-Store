<template>
  <div class="card col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <img class="card-img-top" src="shirt.img" />
    <div class="card-body">
      <h5 class="card-title">{{shirt.title}}</h5>
      <h6 class="card-text">{{shirt.price}}</h6>
      <router-link :to="`/shirt/${shirt.id}`" class="btn btn-success">Vue me</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["shirt"]
};
</script>


<style>
.card {
  background-color: rgb(255, 215, 39);
  width: 15rem;
  padding: 0.5rem;
}
</style>
