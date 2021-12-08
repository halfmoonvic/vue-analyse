// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template:
    '<ul :class="bindCls" class="list" v-if="isShow">' +
    '<li v-for="(item, index) in data" @click="clickItem(index)">{{item}}: index</li>' +
    '</ul>',
  data() {
    return {
      bindCls: 'a',
      isShow: 'true',
      data: ['A', 'B', 'C', 'D']
    }
  },
  methods: {
    clickItem(index) {
      console.log(index)
    }
  }
})
