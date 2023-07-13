<!-- PageHeader.vue -->
<template>
  <v-app-bar title="OK Board">
    <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
    <div id="nav">
      <router-link to="/"><v-btn variant="text"> Login </v-btn></router-link>
      <router-link to="/sign-in"
        ><v-btn variant="text"> Sign In </v-btn></router-link
      >
      <router-link to="/sign-up"
        ><v-btn variant="text"> Sign Up </v-btn></router-link
      >
    </div>
  </v-app-bar>
  <NavigationDrawers />
  <hr />
</template>

<script>
import { defineComponent } from "vue";
import NavigationDrawers from "@/components/NavigationDrawers.vue";

export default defineComponent({
  components: { NavigationDrawers },
});
</script>
