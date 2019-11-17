<template>
    <div class="page">
        <v-header>最近听过</v-header>
        <v-count class="mt90">{{historyList.length}}</v-count>
        <v-scroll class="user-list-container">
            <song-list :data="historyList"></song-list>
        </v-scroll>
    </div>
</template>

<script>
import vHeader from '../components/mHeader'
import Count from '../components/count'
import Scroll from '../components/scroll'
import Songlist from '../components/songList'
import { mapGetters } from 'vuex'
export default {
  name: 'user-history-list',
  components: {
    'v-header': vHeader,
    'v-count': Count,
    'v-scroll': Scroll,
    'song-list': Songlist
  },
  computed: {
    ...mapGetters(['historyList'])
  }
}
</script>

<style lang="less" scoped>
.mt90{
    margin-top: 90px;
}
.user-list-container{
    height: calc(100vh - 280px);
    overflow: hidden;
}
</style>
