<template>
  <div class="register">
    <h2>Register</h2>
    <button @click="changeForm">Iniciar sesión</button>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: {
    changeForm: {
      type: Function,
    },
  },
};
</script>

<style scoped></style>
