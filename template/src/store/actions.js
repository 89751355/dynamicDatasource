/* ************** action ***************/
import * as types from './mutation-type.js'

export default {
  /**
   * 设置一个同步动作，改变状态1
   * @param commit
   * @param bEdited
   */
  setStatus1Asyn ({commit}, status1) {
    commit(types.SET_STATUS1, status1)
  },

  /**
   * 设置一个异步动作，改变状态2，常常通过异步请求从服务器端活的数据来改变status
   * @param state
   * @param commit
   */
  async setStatus2Asyn ({state, commit}) {
    let res = await fetch('GET', 'status2')

    if (res.data) {
      commit(types.SET_STATUS2, res.data)
    }
    return res
  }
}
