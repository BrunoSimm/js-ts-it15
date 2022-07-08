<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja</button> |
    <button @click="ninjaOne.age++">Update ninja age</button>

    <hr />
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja 2</button> |
    <button @click="ninjaTwo.age++">Update ninja 2 age</button>

    <hr />
    <h2>Computed</h2>
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>

    <hr />
    <h2>Posts</h2>
    <PostList v-if="showPosts" :posts="posts"></PostList>
    <button @click="showPosts = !showPosts">toggle posts</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref, reactive } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";
import getPosts from "../composables/getPosts";

export default {
  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
    //runs before all other methods (created, mounted etc.)
    const ninjaOne = ref({
      name: "mario",
      age: 30,
    });
    const ninjaTwo = reactive({
      name: "mario2",
      age: 50,
    });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 400;
    };

    //Computed
    const names = ref(["mario", "yoshi", "bruno", "toad"]);
    const search = ref("");
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    //watch
    watch(search, () => {
      console.log("watch =>", search.value);
    });

    watchEffect(() => {
      //Execute when the component first load
      //if a ref is used inside then the method loads every time ref change
      console.log("watchEffect", search.value);
    });

    //props
    /* const posts = ref([
      { title: "wlcome blog", body: "lorem ipsum", id: 1 },
      { title: "wlcome blog2", body: "lorem ipsum2", id: 2 },
      { title: "wlcome blog3", body: "lorem ipsum3", id: 3 },
    ]);*/

    //calling composable methods
    const { posts, error, load } = getPosts(); //call composable method with refs and methods
    load(); //execute method from composable "component"

    const showPosts = ref(true);

    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      matchingNames,
      names,
      search,
      posts,
      showPosts,
    };
  },
};
</script>
