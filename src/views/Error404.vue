<template>
  <div class="ui container">
    <div class="ui center">
      <img src="../assets/nomina.png">
      <h1>Error 404</h1>
      <div class="return-home"><router-link to="/">IR AL INICIO</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style lang="scss" scoped>
.ui.container {
  .ui.center {
    text-align: center;
    margin-top: 20%;
  }
  h1 {
    color: #e22e2e;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
  }
  a {
    color: #16202b;
    font-weight: bold;
  }
  img {
    width: 40px;
  }
  .return-home {
    text-align: center;
  }
}
</style>
