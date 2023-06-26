<template>
  <div class="login">
    <h2>Login</h2>
    <button @click="changeForm">Registrarse</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    changeForm: {
      type: Function,
    },
  },
};
</script>

<style scoped></style>
