<template>
  <v-card class="mx-auto" style="max-width: 500px">
    <v-toolbar color="deep-purple-accent-4" cards dark flat>
      <v-btn icon @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-title class="text-h6 font-weight-regular">
        Edit post
      </v-card-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-form ref="form" class="pa-4 pt-6">
      <v-text-field
        v-model="editedPost.title"
        label="Title"
        variant="outlined"
      ></v-text-field>
      <v-textarea
        v-model="editedPost.content"
        label="Content"
        variant="outlined"
      ></v-textarea>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn variant="text" @click="clearForm"> Clear </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="deep-purple-accent-4" @click="updatePost"> Update </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import router from "@/router";
import axios from "axios";

export default {
  data() {
    return {
      editedPost: {
        title: "",
        content: "",
      },
      originalPost: {
        title: "",
        content: "",
      },
    };
  },
  created() {
    const postId = this.$route.params.postId;
    this.fetchPost(postId);
  },
  methods: {
    fetchPost(postId) {
      axios
        .get(`/api/post/${postId}`)
        .then((response) => {
          // this.editedPost = response.data;
          this.editedPost.title = response.data.title;
          this.editedPost.content = response.data.content;
          this.originalPost.title = response.data.title;
          this.originalPost.content = response.data.content;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updatePost() {
      const postId = this.$route.params.postId;
      /*if (
        this.editedPost.title.trim() === this.editedPost.title &&
        this.editedPost.content.trim() === this.editedPost.content
      ) {
        alert("변경된 사항이 없습니다.");
        // this.$router.go(); // 현재 페이지 갱신
        this.fetchPost(postId);
        return;
      }
      if (!this.editedPost.title.trim() || !this.editedPost.content.trim()) {
        alert("내용을 입력해 주세요.");
        return;
      }*/
      if (
        this.editedPost.title.trim() === this.originalPost.title &&
        this.editedPost.content.trim() === this.originalPost.content
      ) {
        alert("변경된 사항이 없습니다.");
        return;
      }
      if (!this.editedPost.title.trim() || !this.editedPost.content.trim()) {
        alert("제목과 내용을 입력해 주세요.");
        return;
      }
      axios
        .put(`/api/post/${postId}`, this.editedPost)
        .then((response) => {
          if (response.status === 200) {
            alert("게시글 수정이 완료되었습니다.");
            // router.push(`/post/${postId}`);
            router.push("/");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    clearForm() {
      this.editedPost.title = "";
      this.editedPost.content = "";
    },
    goBack() {
      router.push("/");
    },
  },
};
</script>

<style scoped></style>
