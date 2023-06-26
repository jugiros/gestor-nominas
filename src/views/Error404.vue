<template>
  <h1>Error404</h1>
  <div class="return-home"><router-link to="/">IR AL INICIO</router-link></div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style lang="scss" scoped>
h1 {
  color: #e22e2e;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-top: 20%;
}
.return-home {
  text-align: center;
}
</style>
