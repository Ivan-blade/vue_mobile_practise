<template>
    <div class="page">
      <v-top :title="title" :img="img" :count="formatData.length"></v-top>
      <v-scroll :data="formatData" class="page-info-list">
        <song-list :data="formatData" @clickItem="addToPlay"></song-list>
      </v-scroll>
    </div>
</template>

<script>
import infoMixin from '../common/js/infoMixin'
import { formatSongDetail } from '@/common/js/util'
import axios from 'axios'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'artist-info',
  computed: {
    ...mapGetters([
      'fullScreen',
      'playList',
      'currentIndex',
      'mode',
      'sequencesList',
      'currentSong'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_FULLSCREEN',
      'SET_PLAY_LIST',
      'SET_SEQUENCE_LIST',
      'SET_CURRENT_INDEX',
      'SET_MODE'
    ]),
    async getInfo (id) {
      const { data } = await axios.get(`/api/artists?id=${id}`)
      this.formatData = formatSongDetail(data.hotSongs)
    },
    addToPlay (item, index) {
      this.SET_FULLSCREEN(true)
      this.SET_PLAY_LIST(this.formatData)
      this.SET_SEQUENCE_LIST(this.formatData)
      this.SET_CURRENT_INDEX(index)
    }
  },
  created () {
    this.getInfo(this.$route.params.id)
  },
  mixins: [infoMixin]
}
</script>

<style lang="less" scoped>
</style>
