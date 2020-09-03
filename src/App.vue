<template>
  <div id="app">
    root: {{ rootCount }}
    <button @click="incrementRoot">增加</button>
    <br />
    <hr />
    <br />
    增： a: {{ increaseModuleACount }} / 减 b: {{ decreaseModuleBCount }}
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <br />
    <hr />
    <br />
    c: {{ increaseModuleCCount }}
    <button @click="incrementC">增加</button>
    <br />
    <hr />
    <br />
    <!-- computedCCount: {{ computedCCount }} -->
    {{ rootCount }}
    {{ computedCount }}
    {{ aCount }}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'App',

  computed: {
    rootCount() {
      return this.$store.state.rootCount
    },
    increaseModuleACount() {
      return this.$store.state.a.count
    },
    decreaseModuleBCount() {
      return this.$store.state.b.count
    },
    increaseModuleCCount() {
      return this.$store.state.a.c.count
    },

    // computedCCount() {
    // return this.$store.getters('a/c/')
    // return this.$store.getters['a/c/computedCount']
    // }
    ...mapState(['rootCount']),
    ...mapGetters(['computedCount']),
    ...mapState('a', {
      aCount: 'count'
    }),
    ...mapGetters('a', {
      aComputedCount: 'computedCount'
    })
  },

  methods: {
    increment() {
      this.$store.dispatch('a/increment')
    },
    decrement() {
      this.$store.dispatch('b/decrement')
    },
    incrementRoot() {
      this.$store.commit('increment')
    },
    incrementC() {
      this.$store.commit('a/c/increment')
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
