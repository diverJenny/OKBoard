<!-- PageHeader.vue -->
<template>
  <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
  <v-app-bar>
    <v-avatar size="36" style="margin-left: 30px">
      <v-img src="../img/logo.png" />
    </v-avatar>
    <v-app-bar-title class="ml-2"> OK Board</v-app-bar-title>
    <template v-slot:append>
      <router-link to="/sign-in" v-if="!$store.state.account.id"
        ><v-btn variant="text"> Sign In </v-btn></router-link
      >
      <router-link to="/sign-up"
        ><v-btn variant="text" v-if="!$store.state.account.id">
          Sign Up
        </v-btn></router-link
      >
      <router-link to="/" v-if="$store.state.account.id"
        ><v-btn variant="text" @click="logout"> Logout </v-btn></router-link
      >
    </template>
  </v-app-bar>
  <!--  <NavigationDrawers />-->
  <!--  <hr />-->
</template>

<script>
import store from "@/scripts/store";
import router from "@/router";

export default {
  name: "PageHeader",
  setup() {
    // eslint-disable-next-line no-unused-vars
    const logout = () => {
      store.commit("setAccount", 0);
      console.log("logout click");
      sessionStorage.removeItem("id");
      router.push("/");
    };
  },
};
</script>

<style>
.v-avatar {
  overflow: hidden;
}
</style>
