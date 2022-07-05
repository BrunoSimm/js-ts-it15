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
  </div>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";
export default {
  name: "HomeView",
  components: {},
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

    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      matchingNames,
      names,
      search,
    };
  },
};
</script>
