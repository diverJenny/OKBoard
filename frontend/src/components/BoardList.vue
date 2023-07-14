<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">Title</th>
        <th class="text-left">Writer</th>
        <th class="text-left">Date Created</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.title }}</td>
        <td>{{ post.user ? post.user.name : "N/A" }}</td>
        <td>{{ post.createdAt }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [], // 게시글 목록을 저장할 배열
    };
  },
  created() {
    this.fetchPosts(); // 컴포넌트 생성 시 게시글 목록 조회
  },
  methods: {
    fetchPosts() {
      axios
        .get("/post") // 게시글 목록을 조회하는 API 엔드포인트로 변경해야 합니다.
        .then((response) => {
          this.posts = response.data; // 응답 데이터를 게시글 목록 배열에 저장
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped></style>
