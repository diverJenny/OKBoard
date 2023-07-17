<template>
  <v-table density="compact" class="d-flex align-center justify-center">
    <thead>
      <tr>
        <th class="text-center">email</th>
        <th class="text-center">username</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td class="text-center">
          <router-link
            :to="{ name: 'UserDetail', params: { userId: user.id } }"
            >{{ user.email }}</router-link
          >
        </td>
        <td class="text-center">{{ user.name }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from "axios";

export default {
  name: "UserList",
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get("/api/user")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
td {
  text-align: center;
}
</style>
