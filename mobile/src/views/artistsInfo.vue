<template>
    <div class="page">
      <v-top :title="title" :img="img" :count="formatData.length"></v-top>
      <v-scroll :data="formatData" class="page-info-list">
        <song-list :data="formatData"></song-list>
      </v-scroll>
    </div>
</template>

<script>
import infoMixin from '../common/js/infoMixin'
import { formatSongDetail } from '@/common/js/util'
import axios from 'axios'

export default {
  name: 'artist-info',
  methods: {
    async getInfo (id) {
      const { data } = await axios.get(`/api/artists?id=${id}`)
      this.formatData = formatSongDetail(data.hotSongs)
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
