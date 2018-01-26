import * as types from '../types'
import user from '../../api/user'

// initial state
const state = {
  loginFlag: true,
  userInfo: [],
}

// getters
const getters = {

}

// actions
const actions = {
  getUserInfo ({ commit }) {
    user.getUserInfo(userInfo => {
      commit(types.RECEIVE_USERINFO, { userInfo })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_USERINFO] (state, { userInfo }) {
    state.userInfo = userInfo
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
