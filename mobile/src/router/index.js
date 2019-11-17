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
import Search from '../components/search'
import userCenter from '../views/userCenter'
import UserPlayList from '../views/userPlayList'
import UserHistoryList from '../views/userHistoryList'
import UserLoveList from '../views/userLoveList'

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
      },
      {
        path: '/search',
        name: 'search',
        component: Search
      },
      {
        path: '/user-center',
        name: 'user-center',
        component: userCenter,
        children: [
          {
            path: '/userHistoryList',
            name: 'userHistoryList',
            component: UserHistoryList
          },
          {
            path: '/userLoveList',
            name: 'userLoveList',
            component: UserLoveList
          },
          {
            path: '/userPlayList',
            name: 'userPlayList',
            component: UserPlayList
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
