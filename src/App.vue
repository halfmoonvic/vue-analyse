<template>
  <div id="app">
    <!-- <div>{{ msg }}</div> -->
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <button @click="change">change</button>
    <!-- <button @click="add">add</button> -->
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'App',
  // props: {
  //   title: {
  //     type: String,
  //     default: 'test props app'
  //   }
  // },
  data() {
    return {
      // msg: {
      //   a: 'hello'
      // },
      list: [1, 2]
    }
  },
  methods: {
    change() {
      // this.list[1] = 3
       Vue.set(this.list, 1, 3)
    },
    add() {
      // this.msg.b = 'world'
      // Vue.set(this.msg, 'b', 'world')
      // this.list[2] = 4
      // this.list.push(4)
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
