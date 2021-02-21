<template>
  <div id="nav">
    <router-link tag="h1" to>LOGO</router-link>
    <ul>
      <router-link tag="li" to="/">Link 1</router-link>
      <router-link tag="li" to>Link 2</router-link>
      <router-link tag="li" to>Link 3</router-link>
    </ul>
    <div id="cart">
      <router-link tag="i" class="fas fa-shopping-cart" to></router-link>
      <div id="counter" class="after">0</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  width: 100vw;
  height: 5rem;
  box-shadow: 0 4px 16px rgba(205, 209, 218, 0.4);

  display: flex;
  justify-content: space-around;
  align-items: center;
}
ul {
  width: 30%;
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
}
h1 {
  padding: 0.3rem 0.7rem;
  background-color: rgb(255, 231, 12);
  border-radius: 25%;
  cursor: pointer;
  margin: 0;
}
#cart {
  display: flex;
  position: relative;
}
i {
  padding: 1rem;
  background-color: rgb(255, 231, 12);
  border-radius: 25%;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
}
#counter {
  cursor: default;
  background-color: rgb(77, 75, 75);
  color: rgb(255, 218, 51);
  padding: 0px 6px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 0;
}
li {
  font-size: 1.5rem;
  border-radius: 5%;
  padding: 0.7rem 1rem;
  cursor: pointer;
}
li:hover {
  background-color: rgb(255, 231, 12);
}
</style>