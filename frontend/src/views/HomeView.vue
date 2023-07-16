<!-- HomeView.vue -->
<template>
  <PageHeader />
  <div class="board-container" style="margin-top: 40px">
    <BoardList class="d-flex align-center justify-center" />
    <div
      class="button-container d-flex justify-center"
      style="margin-top: 15px; margin-left: 170px"
    >
      <router-link v-if="isLoggedIn" to="/create-post">
        <v-btn variant="outlined" size="small">Write a post</v-btn>
      </router-link>
      <v-btn v-else variant="outlined" size="small" @click="showLoginMessage">
        Write a post
      </v-btn>
    </div>
  </div>
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
