<template>
  <div>
    <v-img class="mx-auto my-6" max-width="50" src="@/img/logo.png"></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-card-title class="text-center text-blue" style="font-size: x-large">
        Sign up</v-card-title
      >

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="name"
        density="compact"
        placeholder="Name"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-text-field
        v-model="passwordChk"
        :append-inner-icon="visible2 ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible2 ? 'text' : 'password'"
        density="compact"
        placeholder="Confirm password"
        prepend-inner-icon="mdi-checkbox-marked-circle-outline"
        variant="outlined"
        @click:append-inner="visible2 = !visible2"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="signUp"
      >
        Sign Up
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  data: () => ({
    visible: false,
    visible2: false,
    email: null,
    name: null,
    password: null,
    passwordChk: null,
    terms: false,
  }),

  methods: {
    signUp() {
      const userData = {
        email: this.email,
        name: this.name,
        password: this.password,
        passwordChk: this.passwordChk,
      };

      /*if (this.password === this.passwordChk) {
        axios.post("/sign-api/sign-up", userData).then((response) => {
          if (response.status === 200) {
            console.log("회원가입 성공");
            window.alert("회원가입을 축하합니다.");
            router.push("/");
          }
        });
      } else {
        console.log("회원가입 실패");
        window.alert("패스워드가 일치하지 않습니다.");
      }*/
      if (
        this.email &&
        this.name &&
        this.password &&
        this.passwordChk &&
        this.terms
      ) {
        if (this.password === this.passwordChk) {
          axios.post("/api/sign-api/sign-up", userData).then((response) => {
            if (response.status === 200) {
              console.log("회원가입 성공");
              window.alert("회원가입을 축하합니다.");
              router.push("/");
            }
          });
        } else {
          window.alert("패스워드가 일치하지 않습니다.");
        }
      } else {
        window.alert("모든 필드를 입력해야 합니다.");
      }
    },
  },
};
</script>
<style scoped></style>
