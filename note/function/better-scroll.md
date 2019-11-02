+ github搜一下

+ 安装
    ```
        npm install better-scroll --save
    ```
+ 子组件（参考scroll.vue）
    ```
        <template>
            <div ref="scrollWrapper">
                <slot></slot>
            </div>
        </template>

        <script>
        import BScroll from 'better-scroll'
        export default {
        name: 'scroll',
        props: {
            data: {
            type: Array,
            default () {
                return []
            }
            }
        },
        watch: {
            data (val) {
            this.$nextTick(() => {
                this.refresh()
                // 在dom更新之后再去初始化
            })
            }
        },
        mounted () {
            this.$nextTick(() => {
            this.initScroll()
            // 在dom更新之后再去初始化
            })
        },
        methods: {
            initScroll () {
            if (!this.$refs.scrollWrapper) return
            this.scroll = new BScroll(this.$refs.scrollWrapper, {
                click: true
            })
            },
            refresh () {
            this.scroll && this.scroll.refresh()
            // 数据改变时重新计算better-scroll确保渲染正常
            }
        }
        }
        </script>

        <style lang="less" scoped>
        </style>

    ```
+ 父组件（参考recommend.vue）
    ```
        <template>
            <div>
                <v-top :title="title" :img="img" :count="newSongData.length"></v-top>
                <v-scroll :data="newSongData" class="recommend-list">
                <song-list :data="newSongData"></song-list>
                </v-scroll>
            </div>
        </template>

        <script>
        import Top from '../components/top.vue'
        import Scroll from '../components/scroll'
        import SongList from '../components/songList'
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
            if (this.newSongData.length > 0) {
                return this.newSongData[0].name
            } else {
                return 'no thing here'
            }
            },
            img () {
            if (this.newSongData.length > 0) {
                return this.newSongData[0].song.album.picUrl
            } else {
                return ''
            }
            }
        },
        data () {
            return {
            newSongData: []
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
                this.newSongData = data.result
            }
            }
        }
        }
        </script>

        <style lang="less" scoped>
        .recommend-list{
            height: calc(100vh - 380px);
            // 减去top中的height
            overflow: hidden;
        }
        </style>

    ```