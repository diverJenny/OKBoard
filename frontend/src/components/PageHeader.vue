<template>
  <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
  <v-app-bar>
    <v-avatar size="36" style="margin-left: 30px">
      <v-img src="../img/logo.png" />
    </v-avatar>
    <v-app-bar-title class="ml-2"> OK Board</v-app-bar-title>
    <template v-slot:append>
      <router-link to="/sign-in" v-if="!$store.state.account.id">
        <v-btn flat> Sign In </v-btn>
      </router-link>
      <router-link to="/sign-up">
        <v-btn variant="text" v-if="!$store.state.account.id"> Sign Up </v-btn>
      </router-link>
      <router-link
        v-if="$store.state.account.id"
        :to="`/user/${$store.state.account.id}`"
      >
        <v-btn variant="text" v-text="username"></v-btn>
      </router-link>
      <v-btn v-if="isManager" variant="text" @click="navigateToUserManagement">
        User Management
      </v-btn>
      <router-link to="/" v-if="$store.state.account.id">
        <v-btn variant="text" @click="logout"> Logout </v-btn>
      </router-link>
    </template>
  </v-app-bar>
</template>

<script>
import store from "@/scripts/store";
import router from "@/router";
import axios from "axios";

export default {
  name: "PageHeader",
  data() {
    return {
      username: "",
      isManager: false,
    };
  },
  created() {
    this.fetchUserInfo();
  },
  methods: {
    fetchUserInfo() {
      const userId = sessionStorage.getItem("user_id");
      if (userId) {
        axios
          .get(`/api/user/${userId}`)
          .then((response) => {
            this.username = response.data.name;
            this.isManager = response.data.role;
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        this.username = "";
        this.isManager = false;
      }
    },
    logout() {
      store.commit("setAccount", 0);
      sessionStorage.removeItem("user_id");
      router.go(0);
    },
    navigateToUserManagement() {
      router.push("/user-management");
    },
  },
};
</script>

<style>
.v-avatar {
  overflow: hidden;
}
</style>
