<template>
  <div id="app">
    <div>{{ name }}</div>
    <button @click="change">change</button>
    <button @click="changeLast">change last name</button>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'App',
  data() {
    return {
      firstName: 'wang',
      lastName: 'lin',
      useless: 0,
    }
  },
  computed: {
    name() {
      if (this.useless > 0) {
        return `${this.firstName} , ${this.lastName}`
      }
      return 'please click change'
    }
  },
  methods: {
    change() {
      this.useless++
    },
    changeLast() {
      this.lastName = 'haha'
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
