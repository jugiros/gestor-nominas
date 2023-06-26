<template>
  <template v-if="user">
    <router-view />
  </template>
  <auth v-if="!user && user !== undefined"></auth>
</template>

<script>
import { onMounted, computed } from "vue";
import { auth } from "./utils/firebase";
import { useStore } from "vuex";
import Auth from "@/views/Auth.vue";

export default {
  components: { Auth },
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
