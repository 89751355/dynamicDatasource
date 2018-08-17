/* ************** mutation操作 ***************/
import * as types from './mutation-type'

export default {
  [types.SET_STATUS1] (state, status1) {
    state.status1 = status1
  },
  [types.SET_STATUS2] (state, status2) {
    state.status2 = status2
  }
}
