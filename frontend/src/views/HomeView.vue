<template>
  <PageHaeder />
  <!--  <v-main class="d-flex align-center justify-center" style="min-height: 500px">-->
  <!--  <NavigationDrawers></NavigationDrawers>-->
  <BoardListView class="d-flex align-center justify-center" />
</template>

<script>
import { defineComponent } from "vue";
import PageHaeder from "@/components/PageHaeder.vue";
import BoardListView from "@/components/BoardListView.vue";

export default defineComponent({
  components: { BoardListView, PageHaeder },
});
</script>
<style></style>
