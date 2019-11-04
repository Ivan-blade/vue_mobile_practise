+ 参考player.vue
    + html区域
        ```
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
        ```
    + style区域
        ```
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
        ```