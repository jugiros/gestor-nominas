<template>
  <div class="register">
    <h1>Crear cuenta...</h1>
    <form class="ui form" @submit.prevent="onRegister">
      <div style="width: 100%" class="ui input field">
        <input
          type="text"
          placeholder="Correo electrónico"
          v-model="formData.email"
          :class="{ error: formError.email }"
        />
      </div>
      <div style="width: 100%" class="ui input field">
        <input
          type="password"
          placeholder="Contraseña"
          v-model="formData.password"
          :class="{ error: formError.password }"
        />
      </div>
      <div style="width: 100%" class="ui input field">
        <input
          type="password"
          placeholder="Repetir contraseña"
          v-model="formData.repeatPassword"
          :class="{ error: formError.repeatPassword }"
        />
      </div>
      <br />
      <button class="ui primary button" type="submit">Registrar</button>
      <p @click="changeForm">Iniciar sesión</p>
    </form>
  </div>
</template>

<script>
import * as Yup from "yup";
import { ref } from "vue";

export default {
  name: "Register",
  props: {
    changeForm: {
      type: Function,
    },
  },
  setup() {
    const schemaForm = Yup.object().shape({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
      repeatPassword: Yup.string()
        .required(true)
        .oneOf([Yup.ref("password")], true),
    });
    let formData = {};
    let formError = ref({});
    const onRegister = async () => {
      console.log("Register", formData);
      formError.value = {};
      try {
        await schemaForm.validate(formData, { abortEarly: false });
        console.log("Todo OK");
      } catch (e) {
        console.log(e);
        e.inner.forEach((error) => {
          console.log(error);
          formError.value[error.path] = error.message;
        });
      }
    };
    return {
      formData,
      onRegister,
      formError,
    };
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
    color: #4b4a4a;
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
