<template>
  <div id="app">
    <hello-world :flag="flag" />
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      flag: true
    }
  },
  methods: {
    toggle() {
      this.flag = !this.flag
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
