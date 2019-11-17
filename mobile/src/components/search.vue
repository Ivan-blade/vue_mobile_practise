<template>
    <div class="page">
        <div class="search-header">
            <i class="iconfont icon-chaxun" @click="searchSongs"></i>
            <input type="text" v-model="keyWord" @keyup.enter="searchSongs" @focus="toggleResultShow(false)">
            <i class="iconfont icon-shanchu2" v-show="keyWord" @click="clearKeyWord"></i>
            <div class="cancel" @click="goBack">取消</div>
        </div>
        <v-scroll class="list-container history-list" v-show="!resultShow">
            <ul>
                <li class="list-title" v-if="searchText.length">搜索历史</li>
                <li class="list-item history-item" v-for="(item, index) in searchText" :key="index" @click="addToSearch(item)">{{item}}<i class="iconfont icon-shanchu1" @click.stop="delKeyWord(item)"></i></li>
                <li class="list-title">热门搜索</li>
                <li class="list-item" v-for="(item, index) in hotWords" :key="`hot-${index}`" @click="addToSearch(item.first)">{{item.first}}</li>
            </ul>
        </v-scroll>
        <div v-show="resultShow">
            <p class="list-count">共{{resultData.length}}首歌曲</p>
            <v-scroll class="list-container result-list">
                <ul>
                    <li v-for="(item, index) in resultData" :key="index"  class="list-item">
                        <p>{{item.name}}</p>
                        <p class="artists-name">
                            <span v-for="(item, index) in item.ar" :key="index">
                                {{item.name}}
                            </span>
                        </p>
                    </li>
                </ul>
            </v-scroll>
        </div>
    </div>
</template>

<script>
import Scroll from '../components/scroll'
import { mapMutations, mapGetters } from 'vuex'
import axios from 'axios'
import { formatSongDetail } from '@/common/js/util'
export default {
  name: 'search',
  components: {
    'v-scroll': Scroll
  },
  data () {
    return {
      resultShow: false,
      hotWords: [],
      keyWord: '',
      resultData: ''
    }
  },
  computed: {
    ...mapGetters([
      'searchText'
    ])
  },
  created () {
    this.searchHotWords()
  },
  methods: {
    ...mapMutations([
      'DEL_SEARCH_TEXT',
      'SET_SEARCH_TEXT'
    ]),
    async searchHotWords () {
      const { data } = await axios.get('/api/search/hot')
      if (data.code === 200) {
        this.hotWords = data.result.hots
      }
    },
    async searchSongs () {
      if (!this.keyWord.trim()) return
      const { data } = await axios.get(`/api/search?keywords=${this.keyWord}`)
      if (data.code === 200) {
        this.resultData = formatSongDetail(data.result.songs)
      }
      this.SET_SEARCH_TEXT(this.keyWord)
      this.toggleResultShow(true)
    },
    toggleResultShow (val) {
      this.resultShow = val
    },
    addToSearch (val) {
      this.keyWord = val
      this.searchSongs()
    },
    goBack () {
      this.$router.back()
    },
    delKeyWord (val) {
      this.DEL_SEARCH_TEXT(val)
    },
    clearKeyWord () {
      this.keyWord = ''
    }
  }
}
</script>

<style lang="less" scoped>
    .search-header{
        padding: 15px 30px;
        background-color: red;
        height: 60px;
        display: flex;
        flex-direction: flex;
        align-items: center;
        position: relative;
        input{
            border-radius: 10px;
            height: 60px;
            font-size: 32px;
            flex: 1;
            padding-left: 65px;
            color: #999;
            box-sizing: border-box;
            outline: none;
        }
        .icon-chaxun{
            position: absolute;
            left: 45px;
            top: 29px;
            font-size: 32px;
            color: #999;
        }
        .icon-shanchu2{
            position: absolute;
            font-size: 32px;
            color: #999;
            right: 130px;
            top: 29px;
        }
        .cancel{
            margin-left: 30px;
            color: white;
            font-size: 28px;
        }
    }
    .history-list{
        height: calc(100vh - 200px);
        // scroll滚动必须添加高度，200px为头部高度加底部高度
    }
    .list-container{
        overflow: hidden;
        .list-title{
            padding: 0 30px;
            line-height: 65px;
            font-size: 24px;
            color: #989898;
        }
        .list-item{
            padding: 30px;
            font-size: 28px;
            color: #333;
            background-color: white;
            border-bottom: 1PX solid #e6e6e6;
        }
        .history-item{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        .icon-shanchu1{
            font-size: 30px;
            color: #999;
        }
    }
    .list-count{
        padding: 0 30px;
        color: #808080;
        line-height: 80px;
        font-size: 26px;
    }
    .result-list{
        height: calc(100vh - 280px);
    }
    .artists-name{
        margin-top: 10px;
        color: #b2b2b2;
        font-size: 20px;
    }
</style>
