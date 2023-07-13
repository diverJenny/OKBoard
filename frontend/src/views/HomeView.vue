<template>
  <PageHaeder />
  <!--  <v-main class="d-flex align-center justify-center" style="min-height: 500px">-->
  <!--  <NavigationDrawers></NavigationDrawers>-->
  <BoardList class="d-flex align-center justify-center" />
  <v-btn icon="mdi-plus" size="small"></v-btn>
</template>

<script>
import { defineComponent } from "vue";
import PageHaeder from "@/components/PageHaeder.vue";
import BoardList from "@/components/BoardList.vue";

export default defineComponent({
  components: { BoardList, PageHaeder },
});
</script>
<style></style>
