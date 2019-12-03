<template>
  <div>{{ helloWorld }}</div>
</template>

<script type="text/javascript">
// third party tools and libraries
// local functions and variables
// local components

export default {
  name: 'HelloWorld',
  components: {},
  beforeCreate() {
    console.log('before create: HelloWorld.vue')
  },
  created() {
    console.log('created: HelloWorld.vue')
  },
  beforeMount() {
    console.log('before mount: HelloWorld.vue')
  },
  mounted() {
    console.log('mounted: HelloWorld.vue')
  },
  data() {
    return {
      helloWorld: '你好啊，格里高利'
    }
  }
}
</script>
