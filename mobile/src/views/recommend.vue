<template>
    <div class="page">
        <v-top :title="title" :img="img" :count="formatData.length"></v-top>
        <v-scroll :data="formatData" class="page-info-list">
          <song-list :data="formatData"></song-list>
        </v-scroll>
    </div>
</template>

<script>
import Top from '../components/top.vue'
import Scroll from '../components/scroll'
import SongList from '../components/songList'
import { formatSongDetail } from '../common/js/util'
import axios from 'axios'

export default {
  name: 'recommend',
  components: {
    'v-top': Top,
    'song-list': SongList,
    'v-scroll': Scroll
  },
  computed: {
    title () {
      if (this.formatData.length > 0) {
        return this.formatData[0].name
      } else {
        return 'no thing here'
      }
    },
    img () {
      if (this.formatData.length > 0) {
        return this.formatData[0].al.picUrl
      } else {
        return ''
      }
    }
  },
  data () {
    return {
      formatData: []
    }
  },
  created () {
    this.getNewSong()
    // 由于是获取数据是异步的导致在没有数据时前端渲染会报错，加上v-if可以解决报错问题
  },
  methods: {
    async getNewSong () {
      const { data } = await axios.get('/api/personalized/newsong')
      if (data.code === 200) {
        this.formatData = formatSongDetail(data.result)
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
