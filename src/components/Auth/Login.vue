<template>
  <div class="login">
    <h1>Iniciar sesión...</h1>
    <form class="ui form" @submit.prevent="onLoading">
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
      <br />
      <button class="ui primary button" type="submit" :class="{ loading }">
        Iniciar sesión
      </button>
      <p @click="changeForm">Registrarse</p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";
import { auth } from "@/utils/firebase";
export default {
  name: "Login",
  props: {
    changeForm: {
      type: Function,
    },
  },
  setup() {
    let formData = {};
    let formError = ref({});
    let loading = ref(false);

    const schemaForm = Yup.object().shape({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
    });

    const onLoading = async () => {
      console.log("Register", formData);
      formError.value = {};
      loading.value = true;
      try {
        await schemaForm.validate(formData, { abortEarly: false });
        console.log("Todo OK");
        try {
          const { email, password } = formData;
          await auth.signInWithEmailAndPassword(email, password);
        } catch (e) {}
      } catch (e) {
        console.log(e);
        e.inner.forEach((error) => {
          console.log(error);
          formError.value[error.path] = error.message;
        });
      }
      loading.value = false;
    };

    const onLogin = () => {
      console.log("init");
    };
    return {
      onLogin,
      formData,
      formError,
      loading,
      onLoading,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
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
