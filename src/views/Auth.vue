<template>
  <div class="auth">
    <h1>Estamos en AUTH</h1>
    <login v-if="showLogin" :change-form="chageForm"></login>
    <register v-else :change-form="chageForm"></register>
  </div>
</template>

<script>
import Login from "@/Auth/Login.vue";
import Register from "@/Auth/Register.vue";
import { ref } from "vue";

export default {
  name: "Auth",
  components: { Register, Login },
  setup() {
    let showLogin = ref(true);

    const chageForm = () => {
      showLogin.value = !showLogin.value;
    };

    return {
      showLogin,
      chageForm
    };
  },
};
</script>

<style scoped></style>
