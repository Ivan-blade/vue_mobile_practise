// 用于添全局变量
import { playMode } from '../common/js/aliasConfig'

const state = {
  fullScreen: false,
  playList: [],
  // 当前模式的歌单数据
  sequencesList: [],
  // 用于保留切换模式之前的歌单数据
  currentIndex: 0,
  // 用于确定当前播放歌曲的位置
  mode: playMode.sequence
}
export default state
