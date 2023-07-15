<!-- SignIn.vue -->
<template>
  <div>
    <v-img class="mx-auto my-6" max-width="50" src="@/img/logo.png"></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-card-text class="text-center text-blue" style="font-size: x-large">
        Sign In</v-card-text
      >

      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a
        >
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        v-model="password"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will
          be temporarily locked for three hours. If you must login now, you can
          also click "Forgot login password?" below to reset the login password.
        </v-card-text>
      </v-card>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="login"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>
Copy code
<script>
import axios from "axios";
import router from "@/router";
import store from "@/scripts/store";

export default {
  data: () => ({
    visible: false,
    email: "",
    password: "",
  }),
  methods: {
    login() {
      const formData = new FormData();
      formData.append("email", this.email);
      formData.append("password", this.password);

      axios
        .post("/sign-api/sign-in", formData)
        .then((response) => {
          // 로그인이 성공한 경우
          console.log(response.data);
          if (response.status === 200) {
            const userId = response.data.id;

            // Store에 계정 정보 저장
            store.commit("setAccount", userId);

            // sessionStorage에 user_id 저장
            sessionStorage.setItem("user_id", userId);
            console.log(userId);
            router.push("/");
          } else {
            // 로그인 실패 처리
            console.log("로그인 실패");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
