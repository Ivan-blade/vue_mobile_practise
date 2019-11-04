// 用于定义同步修改全局变量的方法

const mutations = {
  SET_FULLSCREEN (state, val) {
    state.fullScreen = val
  },
  SET_PLAY_LIST (state, val) {
    state.playList = val
  },
  SET_SEQUENCE_LIST (state, val) {
    state.sequenceList = val
  },
  SET_CURRENT_INDEX (state, val) {
    state.currentIndex = val
  },
  SET_MODE (state, val) {
    state.mode = val
  }
}
export default mutations
