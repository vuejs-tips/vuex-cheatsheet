// store.js

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },

  getters: {
    doneTodos (state, getters, rootState) {
      return state.todos.filter(todo => todo.done)
    },

    getTodoById: (state, getters, rootState) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },

    getTodoById (state, getters, rootState) {
      return id => state.todos.find(todo => todo.id === id)
    }
  },

  mutations: {
    addTodo (state, payload) {
      state.todos.push(payload)
    }
  },

  actions: {
    addTodoSync (context, payload) {
      context.commit('addTodo', payload)
    },

    addTodoAsync ({commit}, payload) {
      return remoteApi.addTodo(payload)
                      .then(todo => commit('addTodo', todo))
    }
  }
})

________________________________________________________________________________________________________________________

// https://vuex.vuejs.org/en/intro.html (imagem)

// <script src="https://unpkg.com/vuex@2.0.0"></script>

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    // this.size
    ...mapState(['size']),
    // alias this.length
    ...mapState({length: 'size'}),
    // functions
    ...mapState({
      // fat arrow
      count: state => state.count,
      // to access local state with `this`, a normal function must be used
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    // getters
    ...mapGetters([
      'doneTodosCount', // same as this.$store.
      doneCount: 'doneTodosCount' // alias
    ])
  },

  methods: {
    // map this.increment() to this.$store.commit('increment')
    ...mapMutations(['increment']),
    // map this.add() to this.$store.commit('increment')
    ...mapMutations({add: 'increment'}),
    // Actions
    ...mapActions([
      // this.addTodo() maps to this.$store.dispatch('addTodo')
      'addTodo',
      // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
      'incrementBy'
    ]),
    // this.add() maps to this.$store.dispatch('increment')
    ...mapActions({
      add: 'increment'
    })
  }
}
