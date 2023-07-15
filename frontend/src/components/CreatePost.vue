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
      <v-btn color="deep-purple-accent-4" @click="createPost"> Submit </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import router from "@/router";
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    createPost() {
      if (this.title === "" || this.content === "") {
        alert("항목을 모두 작성해주세요.");
      } else {
        const userId = sessionStorage.getItem("user_id");
        console.log(userId);

        const postDto = {
          title: this.title,
          content: this.content,
          user: { id: userId },
        };

        axios
          .post("/post", postDto)
          .then((response) => {
            if (response.status === 200) {
              window.alert("게시글 작성이 완료되었습니다.");
              router.push("/");
            }
          })
          .catch((error) => {
            console.error(error);
          });

        console.log("Submit Form:", postDto);
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
