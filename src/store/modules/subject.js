import * as types from '../types'
import subject from '../../api/subject'

// initial state
const state = {
  title: '',
  userInfo: {},
  posted: '',
  tags: [],
  status: [],
  info: '',
  content: '',
  attachment: []
}

// actions
const actions = {
  getSubjectContent({ commit }) {
    subject.getUserInfo(userInfo => {
      commit(types.RECEIVE_SUBJECTCONTENT, { userInfo })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_SUBJECTCONTENT](state, { subjectContent }) {
    state.subjectContent = subjectContent
  },
  [types.RECEIVE_SUBJECTSTATUS](state, { userInfo }) {
    state.userInfo = userInfo
  },
  [types.RECEIVE_SUBJECTATTACHMENT](state, { userInfo }) {
    state.userInfo = userInfo
  },
}

export default {
  state,
  actions,
  mutations
}
