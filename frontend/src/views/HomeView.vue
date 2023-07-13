<template>
  <PageHaeder />
  <v-main
    class="d-flex align-center justify-center"
    style="min-height: 500px"
  ></v-main>
</template>

<script>
import { defineComponent } from "vue";
import PageHaeder from "@/components/PageHaeder.vue";

export default defineComponent({
  components: { PageHaeder },
});
</script>
