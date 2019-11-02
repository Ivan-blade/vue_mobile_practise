<template>
  <div>
      <div class="header">
        <div class="personal">我的</div>
        <div>MIKO</div>
        <i class="iconfont icon-chaxun"></i>
      </div>
      <div class="swiper-content home-item">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in newSongData" :key="index">
            <img :src="`${item.song.album.blurPicUrl}?param=400y400`" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <ul class="nav">
          <li @click="goToRecommend">
            <div class="item-container">
              <i class="iconfont icon-date icon"></i>
            </div>
            <p>每日推荐</p>
          </li>
          <li @click="goToPlayListView">
            <div class="item-container">
              <i class="iconfont icon-music-list icon"></i>
            </div>
            <p>歌单</p>
          </li>
          <li @click="goToRank">
            <div class="item-container">
              <i class="iconfont icon-rank icon"></i>
            </div>
            <p>排行榜</p>
          </li>
        </ul>
      </div>
      <div class="home-item">
        <div class="title-wrapper">
          <div class="title">
            每日推荐
          </div>
          <div class="more" @click="goToPlayListView">
            <i class="iconfont icon-more"></i>
          </div>
        </div>
        <div class="play-list-wrapper">
          <play-list :data="playListData" @clickItem="goToPlayListInfo"></play-list>
        </div>
      </div>
      <div class="home-item">
        <div class="title-wrapper">
          <div class="title">
            热门歌手
          </div>
          <div class="more" @click="goToArtists">
            <i class="iconfont icon-more"></i>
          </div>
        </div>
        <artist-list :data="artistsData" @clickItem="goToArtistsInfo"></artist-list>
      </div>
      <transition name="slide">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import axios from 'axios'
import ArtistList from '../components/artistList'
import PlayList from '../components/playList'

export default {
  name: 'home',
  components: {
    'play-list': PlayList,
    'artist-list': ArtistList
  },
  data  () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      newSongData: [],
      playListData: [],
      artistsData: []
    }
  },
  created () {
    this.getNewSong()
    this.getPlayList()
    this.getAritist()
  },
  methods: {
    async getNewSong () {
      const { data } = await axios.get('/api/personalized/newsong')
      if (data.code === 200) {
        this.newSongData = data.result
        // console.log(this.newSongData)
      }
    },
    async getPlayList () {
      const { data } = await axios.get('/api/personalized')
      if (data.code === 200) {
        this.playListData = data.result.slice(0, 6)
      }
    },
    async getAritist () {
      const { data } = await axios.get('/api/top/artists?limit=10')
      if (data.code === 200) {
        this.artistsData = data.artists
      }
    },
    goToRecommend () {
      this.$router.push({
        name: 'recommend'
      })
    },
    goToPlayListView () {
      this.$router.push({
        name: 'playlistview'
      })
    },
    goToRank () {
      this.$router.push({
        name: 'rank'
      })
    },
    goToArtists () {
      this.$router.push({
        name: 'artists'
      })
    },
    goToPlayListInfo (item) {
      this.$router.push({
        name: 'playListInfo',
        params: {
          id: item.id
        }
      })
    },
    goToRankInfo (id) {
      this.$router.push({
        name: 'rankInfo',
        params: {
          id
        }
      })
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
  .header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 90px;
    background-color: #f2353c;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    //排成一行
    align-items: center;
    //垂直居中
    justify-content: space-between;
    //两端对齐
    color: white;
    font-size: 36px;
    z-index: 9;
    //给与header较高层级防止在上划时被覆盖

    .personal{
      color:#f9a1b0;
    }

    i{
      font-size: 36px;
    }
  }
  .home-item{
    padding: 20px;
    margin-bottom: 20px;
    background-color: white;
    .title-wrapper{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 40px;
    }
    .title{
      padding-left: 20px;
      font-size: 34px;
      border-left: 6px solid #f2353c;
      color: #4c4c4c;
      line-height: 38px;
    }
    .more{
      width: 50px;
      height: 38px;
      border: 1px solid #ccc;
      border-radius: 25px;
      color: #bfbfbf;
      text-align: center;
      line-height: 38px;
    }
  }
  .swiper-content{
    padding: 20px;
    margin-top: 90px;
      .swiper-container{
        //这边的组件标签名是从html页面中得到的
        width: 100%;
        height: 350px;
        border-radius: 10px;
      }
      img{
        width: 100%;
      }
  }
  .nav{
    padding: 20px 30px 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    li{
      text-align: center;
    }
    .item-container{
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: red;
      margin-bottom: 20px;
      line-height: 120px;
      //调整位置字体图在container中居中
    }
    .icon{
      font-size: 70px;
      //调整字体图片代销
      color: white;
    }
  }
  .artists-list{
    li{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 30px;
      border-top: 1PX solid #e6e6e6;
      margin-right: -20px;
      margin-left: -20px;
      img{
        width: 80px;
        height: 80px;
        margin-right: 20px;
      }
      .name{
        font-size: 30px;
        color: #000;
        margin-bottom: 20px;
      }
      .info{
        font-size: 24px;
        color: #b2b2b2;
      }
    }
  }
  .play-list-wrapper{
    min-height: 650px;
  }
</style>
