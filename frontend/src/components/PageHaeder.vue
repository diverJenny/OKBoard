<!-- PageHeader.vue -->
<template>
  <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
  <v-app-bar>
    <v-avatar size="36" style="margin-left: 30px">
      <v-img src="../img/logo.png" />
    </v-avatar>
    <v-app-bar-title class="ml-2"> OK Board</v-app-bar-title>
    <template v-slot:append>
      <router-link to="/sign-in"
        ><v-btn variant="text"> Sign In </v-btn></router-link
      >
      <router-link to="/sign-up"
        ><v-btn variant="text"> Sign Up </v-btn></router-link
      >
    </template>
  </v-app-bar>
  <!--  <NavigationDrawers />-->
  <!--  <hr />-->
</template>

<script></script>

<style>
.v-avatar {
  overflow: hidden;
}
</style>
