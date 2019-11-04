// 返回处理之后可用的信息
const getters = {
  fullScreen (state) {
    return state.fullScreen
  },
  playList (state) {
    return state.playList
  },
  currentIndex (state) {
    return state.currentIndex
  },
  mode (state) {
    return state.mode
  },
  sequencesList (state) {
    return state.sequencesList
  },
  currentSong (state) {
    return state.playList[state.currentIndex]
  }
}
export default getters
