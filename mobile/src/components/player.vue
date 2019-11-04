<template>
    <div>
        <div v-show="!fullScreen" class="mini-player">
            <div class="player-info" @click="toggleShow(true)">
                <div class="player-img">
                    <img src="" alt="">
                </div>
                <div>
                    <p class="player-name">歌曲名称</p>
                    <p class="player-artists">周杰伦</p>
                </div>
            </div>
            <div class="player-operate">
                <i class="iconfont icon-zanting icon-op"></i>
                <i class="iconfont icon-xiayiqu"></i>
            </div>
            <div class="mini-progress"></div>
        </div>
        <transition name="player">
            <div v-show="fullScreen" class="player">
                <div class="player-mask"></div>
                <div class="player-header">
                    <i class="iconfont icon-xia" @click="toggleShow(false)"></i>
                    <div class="header-info">
                        <p>歌曲名称</p>
                        <p class="header-artists">周杰伦</p>
                    </div>
                </div>
                <swiper :options="swiperOption">
                    <swiper-slide class="img-container">
                    <img src="../assets/image/bg-white.png" alt="">
                    <i class="iconfont icon-xiai"></i>
                    </swiper-slide>
                    <swiper-slide>
                    歌词
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="player-operate">
                    <div class="operate-mask"></div>
                    <div class="progress">
                        <span class="time">1:11</span>
                        <div class="progress-bar">
                            <div class="bar-moved"></div>
                            <div class="bar-btn"></div>
                        </div>
                        <span class="time">4:00</span>
                    </div>
                    <div class="operate-icon">
                        <i class="iconfont icon-liebiaoxunhuan fs-40"></i>
                        <i class="iconfont icon-shangyiqu fs-80"></i>
                        <i class="iconfont icon-zanting fs-100"></i>
                        <i class="iconfont icon-xiayiqu fs-80"></i>
                        <i class="iconfont icon-more fs-40"></i>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'player',
  data () {
    return {
      fullScreen: true,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    toggleShow (val) {
      this.fullScreen = val
    }
  }
}
</script>

<style lang="less" scoped>
.mini-player{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #150a06;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 10px 30px 10px 20px;
    z-index: 10;
    .player-info{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .player-img{
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        border-radius: 50%;
        overflow: hidden;
        border: 4PX solid #695945;
        margin-right: 20px;
        img{
            width: 100%;
        }
    }
    .player-name{
        font-size: 26px;
        margin-bottom: 10px;
        line-height: 30px;
    }
    .player-artists{
        font-size: 20xp;
        color:#b2b2b2;
    }
    .player-operate{
        i{
            font-size: 65px;
            color: #c9c3c1;
        }
        .icon-op{
            margin-right: 50px;
        }
    }
    .mini-progress{
        width: 30%;
        height: 6px;
        background-color: #f2353c;
        position: absolute;
        bottom: 0;
        left: 0;
        // 日。。。。原来就是一条线
    }
}
.player{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 11;
    background-image: url("../assets/image/user-bg.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    color: white;
    &:after{
        content: '';
        background: inherit;
        position: absolute;
        top: -40px;
        left: -40px;
        width: calc(100% + 80px);
        height: calc(100% + 80px);
        filter: blur(20px);
        z-index: -2;
    }
    .player-mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: .5;
        z-index: -1;
    }
    .player-header{
        height: 60px;
        padding: 30px;
        i{
            font-size: 46px;
            position: absolute;
            left: 30px;
            top: 30px;
        }
        .header-info{
            width: 70%;
            margin: 0 auto;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 30px;
        }
        .header-artists{
            color: #b2b2b2;
            margin-top: 12px;
            font-size: 18px;
        }
    }
    .swiper-container{
        height: calc(100% - 360px);
    }
    .img-container{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img{
            width: 500px;
            height: 500px;
            border-radius: 50%;
            border: 20PX solid #2b433c;
        }
        i{
            position: absolute;
            left: 30px;
            bottom: 30px;
            font-size: 50px;
            color: #c4b9bb;
        }
    }
    .player-operate{
        width: 100%;
        height: 300px;
        position: relative;
        .operate-mask{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-color: rgba(0,0,0,0.1);
            z-index: -1;
        }
    }
    .progress{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 50px;
        padding: 30px;
        .time{
            width: 60px;
        }
        .progress-bar{
            width: 560px;
            height: 4px;
            background-color: #7e7374;
            position: relative;
            margin: 0 30px;
        }
        .bar-moved{
            position: absolute;
            left: 0;
            top: 0;
            height: 4px;
            background-color: #f2353c;
            width: 30px;
        }
        .bar-btn{
            position: absolute;
            left: 30px;
            top: 0;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: white;
            border: 5PX solid #5d5759;
            transform: translate3d(-50%, -50%, 0);
        }
    }
    .operate-icon{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        color: #c4b9bb;
        .fs-40{
            font-size: 40px;
        }
        .fs-80{
            font-size: 80px;
        }
        .fs-100{
            font-size: 100px;
        }
    }
}
.player-enter-active,.player-leave-active{
    transition: all .3s;
    opacity: 1;
    .player-header,.player-operate{
        transform: translate3d(0, 0, 0);
        transition: all .3s cubic-bezier(0.86, 0.18, 0.82, 1.32);
    }
}
.player-enter,.player-leave-to{
    .player-header{
        transform: translate3d(0, -100px, 0);
        // 由上向下显示
    }
    .player-operate{
        transform: translate3d(0, 100px, 0);
        // 由下向上显示
    }
}
</style>
