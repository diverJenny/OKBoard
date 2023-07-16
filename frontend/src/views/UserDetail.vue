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
        User information
      </v-card-title>

      <v-text-field
        v-model="email"
        readonly
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="username"
        readonly
        density="compact"
        placeholder="Username"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
      ></v-text-field>

      <v-dialog v-model="confirmPasswordDialog" max-width="500px">
        <v-card>
          <v-card-title class="text-center">Confirm Password</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="passwordConfirmation"
              label="Password"
              type="password"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="validatePassword">Submit</v-btn>
            <v-btn color="error" @click="cancelEdit">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="editDialog" max-width="500px">
        <v-card>
          <v-card-title class="text-center">Edit User</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="editedUsername"
              :rules="usernameRules"
              label="Username"
              required
            ></v-text-field>
            <v-text-field
              v-model="editedPassword"
              :rules="passwordRules"
              label="Password"
              type="password"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="saveChanges">Save</v-btn>
            <v-btn color="error" @click="cancelEdit">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn color="error" @click="confirmDelete">Withdraw</v-btn>
      <v-btn color="primary" @click="openConfirmPasswordDialog">Edit</v-btn>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      username: "",
      confirmPasswordDialog: false,
      editDialog: false,
      passwordConfirmation: "",
      editedUsername: "",
      editedPassword: "",
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) => (v && v.length >= 3) || "Username must be at least 3 characters",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 6) || "Password must be at least 6 characters",
      ],
    };
  },
  created() {
    this.fetchUserInfo();
  },
  methods: {
    fetchUserInfo() {
      const userId = sessionStorage.getItem("user_id");
      axios
        .get(`/api/user/${userId}`)
        .then((response) => {
          this.email = response.data.email;
          this.username = response.data.name;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    openConfirmPasswordDialog() {
      this.confirmPasswordDialog = true;
      this.passwordConfirmation = "";
    },
    validatePassword() {
      const userId = sessionStorage.getItem("user_id"); // 사용자의 ID 값 가져오기
      const password = this.passwordConfirmation; // 입력한 비밀번호
      axios
        .get(`/api/user/validate-password/${userId}`, {
          params: {
            password: password,
          },
        })
        .then((response) => {
          const isPasswordValid = response.data;
          if (isPasswordValid) {
            this.confirmPasswordDialog = false;
            this.editDialog = true; // 비밀번호가 일치하면 수정 모달 표시
          } else {
            alert("비밀번호가 일치하지 않습니다."); // 비밀번호가 일치하지 않을 경우 알림 표시
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    cancelEdit() {
      this.confirmPasswordDialog = false;
      this.editDialog = false;
      this.passwordConfirmation = "";
      this.editedUsername = "";
      this.editedPassword = "";
    },
    saveChanges() {
      const userId = sessionStorage.getItem("user_id");
      const payload = {
        name: this.editedUsername, // 수정된 사용자 이름 전달
        password: this.editedPassword,
      };

      axios
        .put(`/api/user/${userId}`, payload)
        .then((response) => {
          if (response.status === 200) {
            this.username = this.editedUsername; // 사용자 이름 업데이트
            this.editDialog = false;
            alert("정보 수정이 완료되었습니다.");
            this.$router.push("/user/" + userId);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    confirmDelete() {
      if (confirm("정말로 회원 탈퇴하시겠습니까?")) {
        const userId = sessionStorage.getItem("user_id");

        axios
          .delete(`/api/user/${userId}`)
          .then((response) => {
            if (response.status === 200) {
              alert("회원 탈퇴되었습니다.");
              sessionStorage.removeItem("user_id");
              this.$router.push("/");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style scoped></style>
