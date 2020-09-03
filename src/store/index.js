import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const moduleC = {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    computedCount(state) {
      return state.count + 1
    }
  }
}

const moduleA = {
  namespaced: true,
  modules: {
    c: moduleC
  },
  state: {
    count: 1
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    computedCount(state) {
      return state.count + 1
    }
  }
}

const moduleB = {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    decrement(state) {
      state.count--
    }
  },
  actions: {
    decrement(context) {
      context.commit('decrement')
    }
  },
  getters: {
    computedCount(state) {
      return state.count - 1
    }
  }
}

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  },
  state: {
    rootCount: 0
  },
  getters: {
    computedCount(state) {
      return state.rootCount + 1
    }
  },
  mutations: {
    increment(state) {
      state.rootCount++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  }
})
