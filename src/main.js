// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false

const Comp = {
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Nexted: {{nested.attr}}</p>
      <button @click="haldleClick">son component change</button>
    </div>
  `,
  // props: ['name', 'nick-name']
  props: {
    name: [Boolean, String],
    nested: Object
  },
  methods: {
    haldleClick() {
      this.nested.attr = 'hahaha'
    }
  }
}

const CompB = {
  template: `
    <div>
      <p>Age: {{age}}</p>
      <p>Sex: {{sex}}</p>
    </div>
  `,
  props: {
    age: Number,
    sex: {
      type: String,
      default: 'female',
      validator(value) {
        return value === 'male' || value === 'female'
      }
    },
    test: {
      default: {
        a: 1
      }
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Comp },
  data() {
    return {
      name: 'lin yue',
      nested: {
        attr: 'some val'
      }
    }
  },
  router,
  template: `
    <div>
      <comp :name="name" :nested="nested" />
      <button @click="haldleClick">father component change</button>
    </div>
  `,
  methods: {
    haldleClick() {
      this.name = 'other name'
    }
  }
})
