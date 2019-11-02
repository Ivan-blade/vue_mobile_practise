<template>
    <div class="page">
      <div>
        <m-header>
          全部歌单
        </m-header>
        <div class="play-wrapper">
          <play-list :data="playListData" @clickItem="goToPlayListInfo"></play-list>
        </div>
      </div>
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
import mHeader from '../components/mHeader.vue'
import PlayList from '../components/playList.vue'
import axios from 'axios'

export default {
  name: 'play-list-view',
  components: {
    'm-header': mHeader,
    'play-list': PlayList
  },
  data () {
    return {
      playListData: []
    }
  },
  created () {
    this.getPlayList()
  },
  methods: {
    async getPlayList () {
      const { data } = await axios.get('/api/personalized')
      if (data.code === 200) {
        this.playListData = data.result
      }
    },
    goToPlayListInfo (item) {
      this.$router.push({
        name: 'playListInfo',
        params: {
          id: item.id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .play-wrapper{
    margin-top: 90px;
    background-color: white;
    padding: 30px 20px;
  }
</style>
