import * as types from '../types'
import article from '../../api/article'

// initial state
const state = {
  totle: 0,
  articleList: [],
}

// getters
const getters = {

}

// actions
const actions = {
  getArticleList({ commit }, selector) {
    article.getArticleList(selector, articleListPackage => {
      commit(types.RECEIVE_ARTICLELIST, { articleListPackage })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_ARTICLELIST](state, { articleListPackage }) {
    state.totle = articleListPackage.totle
    state.articleList = articleListPackage.articlelist
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
