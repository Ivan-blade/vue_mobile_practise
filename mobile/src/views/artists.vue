<template>
    <div class="page">
      <div>
        <v-header>热门歌手</v-header>
        <artist-list :data="artistsData" class="artists" @clickItem="goToArtistsInfo"></artist-list>
      </div>
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
import mHeader from '../components/mHeader'
import ArtistList from '../components/artistList'
import axios from 'axios'
export default {
  name: 'artists',
  components: {
    'v-header': mHeader,
    'artist-list': ArtistList
  },
  data () {
    return {
      artistsData: []
    }
  },
  created () {
    this.getAritist()
  },
  methods: {
    async getAritist () {
      const { data } = await axios.get('/api/top/artists')
      if (data.code === 200) {
        this.artistsData = data.artists
      }
    },
    goToArtistsInfo (item) {
      this.$router.push({
        name: 'artistsInfo',
        params: {
          id: item.id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.artists{
  margin-top: 90px;
  background-color: white;
  padding: 0 20px;
}
</style>
