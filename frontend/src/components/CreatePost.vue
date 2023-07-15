<template>
  <v-card class="mx-auto" style="max-width: 500px">
    <v-toolbar color="deep-purple-accent-4" cards dark flat>
      <v-btn icon @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-title class="text-h6 font-weight-regular">
        게시글 작성
      </v-card-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-form ref="form" class="pa-4 pt-6">
      <v-text-field
        v-model="title"
        label="Title"
        variant="outlined"
      ></v-text-field>
      <v-textarea
        v-model="content"
        label="Content"
        variant="outlined"
      ></v-textarea>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn variant="text" @click="clearForm"> Clear </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="deep-purple-accent-4" @click="submitForm"> Submit </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import router from "@/router";
import store from "@/scripts/store";

export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    submitForm() {
      if (store.state.account) {
        // 로그인이 되어 있는 경우 게시글 작성 처리 로직 추가
        console.log("게시글 작성:", this.title, this.content);
      } else {
        // 로그인이 되어 있지 않은 경우 로그인 페이지로 이동
        router.push("/signin");
      }
    },
    clearForm() {
      this.title = "";
      this.content = "";
    },
    goBack() {
      router.go(-1); // 이전 페이지로 돌아가기
    },
  },
};
</script>

<style scoped></style>
