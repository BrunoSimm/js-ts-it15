<template>
  <div class="post-list">
    <p>pis</p>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "../components/SinglePost.vue";

export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    //use props inside setup from composition api
    console.log(props);

    onMounted(() => {
      console.log("PostList mounted");
    });

    onUnmounted(() => {
      console.log("Component Unmounted");
    });

    onUpdated(() => {
      console.log("Component Updated");
    });
  },
};
</script>

<style>
</style>