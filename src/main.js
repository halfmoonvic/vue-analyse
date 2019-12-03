// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const allComponent = {
  name: 'AllComponent',
  mounted() {
    console.log('all component')
  }
}

// function aa(resolve, reject) {
//   // '@/components/HelloWorld'
//   console.log('hahahah');
//   new Promise(function(resolve) {
//     resolve();
//   })
//     .then(function() {
//       var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__('./src/components/HelloWorld.vue')];
//       (function(res) {
//         console.log('hehehee');
//         resolve(res);
//       }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));
//     })
//     .catch(__webpack_require__.oe);
// }

// Vue.component('HelloWorld', function(resolve, reject) {
//   // '@/components/HelloWorld'
//   console.log('hahahah')
//   require(['./components/HelloWorld.vue'], function(res) {
//     console.log('hehehee')
//     resolve(res)
//   })
// })

// function () {
//   return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/components/HelloWorld.vue"));
// }
// Vue.component('HelloWorld', () => import('./components/HelloWorld.vue'))

const LoadingComp = {
  mounted() {
    console.log('loading comp')
  }
}

const ErrorComp = {
  mouted() {
    console.log('error comp')
  }
}

const AsyncComp = () => ({
  // 需要加载的组件。应当是一个 Promise
  component: import('./components/HelloWorld.vue'),
  // 加载中应当渲染的组件
  loading: LoadingComp,
  // 出错时渲染的组件
  error: ErrorComp,
  // 渲染加载中组件前的等待时间。默认：200ms。
  delay: 200,
  // 最长等待时间。超出此时间则渲染错误组件。默认：Infinity
  timeout: 3000
})
Vue.component('HelloWorld', AsyncComp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data() {
    return {
      mainMsg: 'mainjs'
    }
  },
  beforeCreate() {
    console.log('before create: main.js')
  },
  created() {
    console.log('created: main.js')
  },
  beforeMount() {
    console.log('before mount: main.js')
  },
  mounted() {
    console.log('mounted: main.js')
  },
  render(createElemnet) {
    return createElemnet(App)
  }
})
