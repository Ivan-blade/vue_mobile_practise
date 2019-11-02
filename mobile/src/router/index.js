import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Artists from '../views/artists.vue'
import PlayListView from '../views/playListView.vue'
import Rank from '../views/rank.vue'
import Recommend from '../views/recommend.vue'
import ArtistsInfo from '../views/artistsInfo'
import PlayListInfo from '../views/playListInfo'
import RankInfo from '../views/rankInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/artists',
        name: 'artists',
        component: Artists,
        children: [
          {
            path: ':id',
            name: 'artistsInfo',
            component: ArtistsInfo
          }
        ]
      },
      {
        path: '/recommend',
        name: 'recommend',
        component: Recommend
      },
      {
        path: '/playlistview',
        name: 'playlistview',
        component: PlayListView,
        children: [
          {
            path: ':id',
            name: 'playListInfo',
            component: PlayListInfo
          }
        ]
      },
      {
        path: '/rank',
        name: 'rank',
        component: Rank,
        children: [
          {
            path: ':id',
            name: 'rankInfo',
            component: RankInfo
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
