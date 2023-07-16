<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-center">Title</th>
        <th class="text-center">Writer</th>
        <th class="text-center">Date Created</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td class="text-center">
          <router-link
            :to="{ name: 'PostDetail', params: { postId: post.id } }"
            >{{ post.title }}</router-link
          >
        </td>
        <td class="text-center">{{ getWriterName(post.user) }}</td>
        <td class="text-center">{{ formatCreatedAt(post.createdAt) }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      posts: [],
      writers: [],
    };
  },
  created() {
    this.fetchPosts();
    this.fetchWriters();
  },
  methods: {
    fetchPosts() {
      axios
        .get("/api/post")
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchWriters() {
      axios
        .get("/api/user")
        .then((response) => {
          this.writers = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getWriterName(user) {
      if (user && user.id) {
        const writer = this.writers.find((writer) => writer.id === user.id);
        return writer ? writer.name : "N/A";
      }
      return "N/A";
    },
    formatCreatedAt(createdAt) {
      return moment(createdAt).format("YYYY-MM-DD");
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
td {
  text-align: center;
}
</style>
