<template>
  <div id="app">
    <ExchangeMenu/>
   <ExchangeForm/>
  </div>
</template>

<script>
import ExchangeForm from "./components/ExchangeForm.vue"
import ExchangeMenu from "./components/ExchangeMenu.vue"

export default {
  name: 'App',
  components: {
    ExchangeForm,
    ExchangeMenu,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
