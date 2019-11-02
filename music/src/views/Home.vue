<template>
  <div>
      <div class="header">
        <div class="personal">我的</div>
        <div>MIKO</div>
        <i class="iconfont icon-chaxun"></i>
      </div>
      <div>
        <swiper :options="swiperOption">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
          <swiper-slide>Slide 9</swiper-slide>
          <swiper-slide>Slide 10</swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
      },
    }
  }
};
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

    .personal{
      color:#f9a1b0;
    }

    i{
      font-size: 36px;
    }
  }
</style>
