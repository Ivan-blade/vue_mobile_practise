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
  },
  isLove (state) {
    let isLove = false
    const currentSong = state.playList[state.currentIndex]
    for (let i = 0; i < state.loveList.length; i += 1) {
      if (currentSong && state.loveList[i].id === currentSong.id) {
        isLove = true
        return isLove
      }
    }
    return isLove
  },
  searchText (state) {
    return state.searchText
  },
  historyList (state) {
    return state.historyList
  },
  loveList (state) {
    return state.loveList
  }
}
export default getters
