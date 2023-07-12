<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>Photos</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      Main Content
    </v-main>
  </v-layout>
</template>
<script setup></script>
<style scoped></style>
