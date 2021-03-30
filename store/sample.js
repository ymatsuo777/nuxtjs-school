export const state = () => ({
  pageTitle: ''
})

// ミューテーション・・・ストアの状態を変更するために必要
export const mutations = {
  /**
   * タイトル設定
   * @param {object} state
   * @param {string} title
   */
  setPageTitle(state, title) {
    state.pageTitle = title
  }
}

// アクション・・・非同期処理を含むことができ、非同期処理が成功したらミューテーションをコミットできる
export const actions = {
  /**
   * タイトル取得
   * @param {object} commit
   * @returns {Promise}
   */
  getTitle({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('common/sample')
        .then(response => {
          commit('setPageTitle', response.data.title)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
