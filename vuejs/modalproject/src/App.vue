<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <ModalClick :header="header" :text="text" theme="sale" @close="toggleModal">
      <!-- Using "SLOTS" to pass html/template to component -->
      <h1>Giveaway</h1>
      <h2>TESTE SLOT</h2>
      <template v-slot:links> <!-- Named slot template 'links' -->
        <a href="#">Sign Up Now!</a> <br>
        <a href="#">More Info!</a>
      </template>
    </ModalClick>
    <!-- close = custom event fired from modal component (child)  -->
  </div>
  <button @click="toggleModal">Open Modal</button>
  <!-- Passando parametros via PROPS -->
</template>

<script>
import ModalClick from './components/ModalClick'

export default {
  name: 'App',
  components: {
    ModalClick
  },
  data () {
    return {
      title: 'VueJS App :)',
      header: 'Sign Up',
      text: ['Texto via PROPS', 10],
      showModal: false
    }
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
