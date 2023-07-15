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
        <td>{{ getWriterName(post.user) }}</td>
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
      writers: [],
    };
  },
  created() {
    this.fetchPosts(); // 컴포넌트 생성 시 게시글 목록 조회
    this.fetchWriters();
  },
  methods: {
    fetchPosts() {
      axios
        .get("/post")
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchWriters() {
      axios
        .get("/users")
        .then((response) => {
          this.writers = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getWriterName(user) {
      const writer = this.writers.find((writer) => writer.id === user.id);
      return writer ? writer.name : "N/A";
    },
  },
};
</script>
