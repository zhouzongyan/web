import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  userStat:false,
  userInfo:{},
  sidebarShow: 'responsive',
  sidebarMinimize: false
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  },
  setUserInfo(state,info){
    state.userStat=info.login;
    state.userInfo=info;
  }
}

export default new Vuex.Store({
  state,
  mutations
})