<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-center">email</th>
        <th class="text-center">username</th>
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
      </tr>
    </tbody>
  </v-table>
</template>

<script></script>

<style scoped></style>
