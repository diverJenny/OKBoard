<template>
  <v-card class="mx-auto" style="max-width: 500px">
    <v-toolbar color="deep-purple-accent-4" cards dark flat>
      <v-btn icon>
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
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    submitForm() {
      // 폼 제출 또는 다른 작업 처리
      console.log("Form submitted:", this.title, this.content);
    },
    clearForm() {
      this.title = "";
      this.content = "";
    },
  },
};
</script>

<style scoped></style>
