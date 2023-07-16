// index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import CreatePost from "@/views/CreatePost.vue";
import PostDetail from "@/views/PostDetail.vue";
import EditPost from "@/views/EditPost.vue";
import UserDetail from "@/views/UserDetail.vue";
import UserList from "@/components/UserList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
  },
  {
    path: "/post/:postId",
    name: "PostDetail",
    component: PostDetail,
  },
  {
    path: "/post/:postId/edit",
    name: "EditPost",
    component: EditPost,
  },
  {
    path: "/user/:userId",
    name: "UserDetail",
    component: UserDetail,
  },
  {
    path: "/user-management",
    name: "UserList",
    component: UserList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
