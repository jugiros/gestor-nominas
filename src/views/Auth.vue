<template>
  <div class="auth">
    <login v-if="showLogin" :change-form="chageForm"></login>
    <register v-else :change-form="chageForm"></register>
  </div>
</template>

<script>
import Login from "@/components/Auth/Login.vue";
import Register from "@/components/Auth/Register.vue";
import { ref } from "vue";

export default {
  name: "Auth",
  components: { Register, Login },
  setup() {
    let showLogin = ref(false);

    const chageForm = () => {
      showLogin.value = !showLogin.value;
    };

    return {
      showLogin,
      chageForm,
    };
  },
};
</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(4, 78, 157);
  background: linear-gradient(
    0deg,
    rgba(4, 78, 157, 1) 0%,
    rgba(0, 174, 255, 1) 100%
  );
}
</style>
