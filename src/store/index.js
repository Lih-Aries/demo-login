import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      curName: '',
      curPwd: '',
      uMesVisible: false,
      pMesVisible: false,
      isLogin: false
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
      }
    },
    actions: {
      getFocusUsername ({commit}) {
        return commit('focusUsername')
      },
      getFocusPassword ({commit}) {
        return commit('focusPassword')
      },
      getLogin ({commit}) {
        return commit('login')
      }
    }
  })
}

export default createStore
