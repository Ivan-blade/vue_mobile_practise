// 用于定义同步修改全局变量的方法

const mutations = {
  SET_FULLSCREEN (state, val) {
    state.fullScreen = val
  },
  SET_PLAY_LIST (state, val) {
    state.playList = val
  },
  SET_SEQUENCE_LIST (state, val) {
    state.sequencesList = val
  },
  SET_CURRENT_INDEX (state, val) {
    state.currentIndex = val
  },
  SET_MODE (state, val) {
    state.mode = val
  },
  DEL_FROM_PLAY_LIST (state, val) {
    const index = state.playList.findIndex(item => item.id === val.delSong.id)
    state.playList.splice(index, 1)
    if (val.curSong.id !== val.delSong.id) {
      state.currentIndex = state.playList.findIndex(item => item.id === val.curSong.id)
    }
  },
  SET_HISTORY_LIST (state, val) {
    let haveHistory = false
    for (let i = 0; i < state.historyList.length; i += 1) {
      if (state.historyList[i].id === val.id) {
        haveHistory = true
        return
      }
    }
    if (!haveHistory) {
      state.historyList.push(val)
    }
    localStorage.setItem('HistoryList', JSON.stringify(state.historyList))
  },
  SET_LOVE_LIST (state, val) {
    let haveLove = false
    for (let i = 0; i < state.loveList.length; i += 1) {
      if (state.loveList[i].id === val.id) {
        haveLove = true
        return
      }
    }
    if (!haveLove) {
      state.loveList.push(val)
    }
    localStorage.setItem('LoveList', JSON.stringify(state.loveList))
  },
  DEL_FROM_LOVE_LIST (state, val) {
    const index = state.loveList.findIndex(item => item.id === val.id)
    state.loveList.splice(index, 1)
    localStorage.setItem('Lovelist', JSON.stringify(state.loveList))
  },
  SET_SEARCH_TEXT (state, val) {
    let haveText = false
    for (let i = 0; i < state.searchText.length; i += 1) {
      if (state.searchText[i] === val.trim()) {
        // trim去除前后空格
        haveText = true
        return
      }
    }
    // for循环确定是否存在记录，如果存在不重复添加
    if (!haveText) {
      state.searchText.unshift(val)
      // 加在列表前
      state.searchText = state.searchText.slice(0, 10)
      // 只保留十个记录
    }
    localStorage.setItem('SearchText', JSON.stringify(state.searchText))
  },
  DEL_SEARCH_TEXT (state, val) {
    for (let i = 0; i < state.searchText.length; i += 1) {
      if (state.searchText[i] === val.trim()) {
        state.searchText.splice(i, 1)
      }
    }
    localStorage.setItem('SearchText', JSON.stringify(state.searchText))
  }
}
export default mutations
