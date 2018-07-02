import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      curName: '',
      curPwd: '',
      uMesVisible: false,
      pMesVisible: false,
      isLogin: false,
      modal: false
    },
    mutations: {
      focusUsername (state) {
        state.uMesVisible = true
      },
      focusPassword (state) {
        state.pMesVisible = true
      },
      validUsername (state, user) {
        state.curName = user
      },
      validPassword (state, pwd) {
        state.curPwd = pwd
      },
      login (state) {
        state.isLogin = true
      },
      modal (state) {
        state.modal = true
      }
    },
    actions: {
      getFocusUsername ({commit}) {
        return commit('focusUsername')
      },
      getValidUsername ({commit}) {
        return commit('validUsername')
      },
      getFocusPassword ({commit}) {
        return commit('focusPassword')
      },
      getValidPassword ({commit}) {
        return commit('validPassword')
      },
      getLogin ({commit}) {
        return commit('login')
      },
      getModal ({commit}) {
        return commit('modal')
      }
    }
  })
}

export default createStore
