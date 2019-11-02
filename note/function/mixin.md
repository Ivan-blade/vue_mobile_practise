### 如果出现大量重复代码可以引用mixin来处理

+ 在新建common/js下新建infomixin.js
    ```
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
        以上是重复部分代码，如果有axios之类涉及功能的库最好不要放在mixin里，因为在使用该库时额定文件中必须出现库的字样
    ```
+ 在引用出简单引入(比如rankInfo.vue中)
    ```
        <template>
            <div>
            <v-top :title="title" :img="img" :count="formatData.length"></v-top>
            <v-scroll :data="formatData" class="page-info-list">
                <song-list :data="formatData"></song-list>
            </v-scroll>
            </div>
        </template>

        <script>
        import infoMixin from '../common/js/infoMixin'
        //引入js文件
        import { formatSongDetail } from '@/common/js/util'
        import axios from 'axios'

        export default {
        name: 'play-list-info',
        methods: {
            async getInfo (id) {
            const { data } = await axios.get(`/api/playlist/detail?id=${id}`)
            this.formatData = formatSongDetail(data.playlist.tracks)
            }
        },
        created () {
            this.getInfo(this.$route.params.id)
        },
        mixins: [infoMixin]
        //简单调用即可
        }
        </script>

        <style lang="less" scoped>
        </style>

    ```