<template>
  <PageHeader />
  <!--  <v-main class="d-flex align-center justify-center" style="min-height: 500px">-->
  <!--  <NavigationDrawers></NavigationDrawers>-->
  <BoardList class="d-flex align-center justify-center" />
  <router-link to="/create-post"
    ><v-btn icon="mdi-plus" size="small" color="indigo"></v-btn
  ></router-link>
</template>

<script>
import BoardList from "@/components/BoardList.vue";
import store from "@/scripts/store";
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "HomeView",
  components: { PageHeader, BoardList },
  setup() {
    const id = sessionStorage.getItem("id");

    if (id) {
      store.commit("setAccount", id);
    }
  },
};
</script>
<style></style>
