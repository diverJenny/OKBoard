<template>
  <v-card class="mx-auto" style="max-width: 500px">
    <v-toolbar color="deep-purple-accent-4" cards dark flat>
      <v-btn icon @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-title class="text-h6 font-weight-regular">
        View post
      </v-card-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-form ref="form" class="pa-4 pt-6">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
      <p style="margin-top: 20px">
        {{ formatCreatedAt(post.createdAt) }}
      </p>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        v-if="isCurrentUserPostAuthor || isCurrentUserManager"
        color="deep-purple-accent-4"
        @click="editPost"
      >
        Edit
      </v-btn>
      <v-btn
        v-if="isCurrentUserPostAuthor || isCurrentUserManager"
        style="color: Red"
        @click="deletePost"
      >
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  data() {
    return {
      post: {}, // 게시글 상세 내용을 저장할 객체
      isCurrentUserPostAuthor: false, // 현재 사용자가 게시글 작성자인지 확인하는 변수
      isCurrentUserManager: false, // 현재 사용자의 role이 manager인지 확인하는 변수
    };
  },
  created() {
    // 라우트 파라미터에서 게시글 ID를 가져옴
    const postId = this.$route.params.postId;
    this.fetchPost(postId); // 게시글 상세 내용 조회
    this.checkCurrentUserRole(); // 현재 사용자의 role 확인
  },
  methods: {
    fetchPost(postId) {
      axios
        .get(`/api/post/${postId}`)
        .then((response) => {
          // console.log(response.data);
          this.post = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    checkCurrentUserRole() {
      const loggedInUserId = sessionStorage.getItem("user_id");
      if (loggedInUserId) {
        axios
          .get(`/api/user/${loggedInUserId}`)
          .then((response) => {
            const user = response.data;
            this.isCurrentUserPostAuthor = user.id === this.post.user?.id; // 현재 사용자가 게시글 작성자인지 확인
            this.isCurrentUserManager = user.role; // 현재 사용자의 role이 manager인지 확인
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    editPost() {
      const postId = this.$route.params.postId;
      router.push(`/post/${postId}/edit`);
    },
    deletePost() {
      const postId = this.$route.params.postId;

      if (confirm("게시글을 삭제하시겠습니까?")) {
        axios
          .delete(`/api/post/${postId}`)
          .then((response) => {
            if (response.status === 200) {
              alert("게시글이 삭제되었습니다.");
              router.push("/");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    goBack() {
      router.go(-1); // 이전 페이지로 돌아가기
    },
    formatCreatedAt(createdAt) {
      const date = new Date(createdAt);
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    },
  },
};
</script>
