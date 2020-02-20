// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false

const CompA = {
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>NickName: {{nickName}}</p>
    </div>
  `,
  // props: ['name', 'nick-name']
  props: {
    name: String,
    nickName: [Boolean, String]
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
  components: { CompA, CompB },
  router,
  template: `
    <div>
      <comp-a name="jackson" nick-name="nick-name" />
      <comp-b :age="18" sex="male" />
    </div>
  `
})
