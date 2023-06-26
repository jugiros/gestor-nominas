<template>
  <template v-if="user">
    <router-view />
  </template>
  <div v-if="!user && user !== undefined">
    <p>Zona login/registro</p>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { auth } from "./utils/firebase";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);

    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        console.log(user);
        store.commit("setUser", user);
      });
    });
    return {
      user,
    };
  },
};
</script>
