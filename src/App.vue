<template>
  <div id="app">
    <span>{{ appMsg }}</span>
    <hello-world />
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      appMsg: 'App component'
    }
  },
  beforeCreate() {
    console.log('before create: App.vue')
  },
  created() {
    console.log('created: App.vue')
  },
  beforeMount() {
    console.log('before mount: App.vue')
  },
  mounted() {
    console.log('mounted: App.vue')
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
