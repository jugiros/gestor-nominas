<template>
  <div class="register">
    <h1>Crear Cuenta</h1>
    <form class="ui form">
      <div style="width: 100%" class="ui input field">
        <input type="text" placeholder="Correo electrónico" />
      </div>
      <div style="width: 100%" class="ui input field">
        <input type="text" placeholder="Contraseña" />
      </div>
      <div style="width: 100%" class="ui input field">
        <input type="text" placeholder="Repetir contraseña" />
      </div>
      <br />
      <button class="ui primary button" type="submit">Registrar</button>
      <p @click="changeForm">Iniciar sesión</p>
    </form>
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

<style lang="scss" scoped>
.register {
  background-color: #fff;
  padding: 30px;
  box-shadow: 0px 0px 38px -5px rgba(0, 0, 0, 0.45);
  width: 400px;
  border-radius: 10px;
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  field {
    width: 100% !important;
    margin-bottom: 10px;
  }
  form {
    button {
      width: 100%;
    }
    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
    p {
      text-align: center;
      margin-top: 30px;
      &:hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }
  }
}
</style>
