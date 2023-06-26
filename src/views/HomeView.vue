<template>
  <h1>Estamos en la Home</h1>
  <button @click="logOut">Cerrar sesión</button>
</template>

<script>
import {auth} from "../utils/firebase";

export default {
  setup() {
    const logOut = () => {
      auth.signOut();
    };
    return {
      logOut,
    };
  },
};
</script>
