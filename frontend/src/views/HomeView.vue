<template>
  <PageHeader />
  <BoardList class="d-flex align-center justify-center" />
  <router-link v-if="isLoggedIn" to="/create-post">
    <v-btn icon="mdi-plus" size="small" color="indigo"></v-btn>
  </router-link>
  <v-btn
    v-else
    icon="mdi-plus"
    size="small"
    color="indigo"
    @click="showLoginMessage"
  ></v-btn>
</template>

<script>
import BoardList from "@/components/BoardList.vue";
import store from "@/scripts/store";
import PageHeader from "@/components/PageHeader.vue";
import { reactive, toRefs } from "vue";

export default {
  name: "HomeView",
  components: { PageHeader, BoardList },
  setup() {
    const state = reactive({
      isLoggedIn: false,
      username: "",
    });

    const userId = sessionStorage.getItem("user_id");

    if (userId) {
      store.commit("setAccount", userId);
      state.isLoggedIn = true;
      state.username = store.state.username;
    }

    const showLoginMessage = () => {
      alert("로그인이 필요합니다.");
    };

    return {
      ...toRefs(state),
      showLoginMessage,
    };
  },
};
</script>
