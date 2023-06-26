<template>
  <router-view/>
</template>

<script>
import {onMounted} from "vue";
import { auth } from './utils/firebase.js';
export default {
  setup() {
    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        console.log(user);
      })
    })
  }
};
</script>