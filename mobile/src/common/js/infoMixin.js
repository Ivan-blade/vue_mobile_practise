import Top from '@/components/top.vue'
import Scroll from '@/components/scroll'
import SongList from '@/components/songList'

export default {
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
  }
}
