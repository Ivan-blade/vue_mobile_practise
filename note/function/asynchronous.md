### 数据获取异步，前端渲染时会出现短暂异常（以top组件为例）
+ 使用v-if处理
    ```
        <template>
            <div>
                <v-top v-if="newSongData.length" :title="newSongData[0].name" :img="newSongData[0].song.album.picUrl" :count="newSongData.length"></v-top>
            </div>
        </template>

        <script>
        import Top from '../components/top.vue'
        import axios from 'axios'

        export default {
        name: 'recommend',
        components: {
            'v-top': Top
        },
        data () {
            return {
            newSongData: []
            }
        },
        created () {
            this.getNewSong()
            //由于是获取数据是异步的导致在没有数据时前端渲染会报错，加上v-if可以解决报错问题
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
        </style>
        这种方式入股出现没有数据的情况下布局也会被打乱所以建议使用下面这种方式

    ```
+ 使用计算属性处理
    ```
        <template>
            <div>
                <v-top :title="title" :img="img" :count="newSongData.length"></v-top>
            </div>
        </template>

        <script>
        import Top from '../components/top.vue'
        import axios from 'axios'

        export default {
        name: 'recommend',
        components: {
            'v-top': Top
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
        </style>

    ```