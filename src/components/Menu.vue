<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="menu left">
        <router-link to="/" class="item">Nóminas</router-link>
      </div>
      <router-link to="/" class="menu center">
        <img src="../assets/nomina.png" class="ui small image" />
      </router-link>
      <div class="menu right">
        <router-link to="/account" class="item"
          >Hola Agustín Navarro</router-link
        >
        <span class="ui item logout">
          <i class="sign-out icon"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped lang="scss">
.ui.menu.secondary {
  background-color: #16202b;
  .item {
    color: #fff;
    &:hover {
      color: #1fa1f1;
    }
  }
  .menu.left {
    width: 50%;
  }
  .menu.right {
    width: 50%;
    justify-content: flex-end;
    .logout:hover {
      cursor: pointer;
      i {
        color: #e22e2e;
      }
    }
  }
  .menu.center {
    background-color: #16212b;
    position: relative;
    top:15px;
    padding: 20px;
    margin: -15px;
    border-radius: 50%;
    &:hover {
      box-shadow: 0px 10px 10px -3px rgba(0, 0, 0, 0.3);
      //Compatibilidades
      -webkit-box-shadow: 0px 10px 10px -3px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0px 10px 10px -3px rgba(0, 0, 0, 0.3);
    }
    .ui.image {
      width: 40px;
    }
  }
}
</style>
