import {playMode} from 'common/js/config'
import {loadSearch, loadPlay} from 'common/js/cache'
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [], // 根据播放模式改变
  sequenceList: [], // 歌单顺序列表
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay()
}
export default state
