<template>
    <div>
        <ul class="play-list">
            <li v-for="(item,index) in data" :key="index" @click="handleClick(item)">
                <img v-lazy="`${item.picUrl}?param=400y400`" alt="">
                <p>{{item.name}}</p>
                <i class="iconfont icon-zanting"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'play-list',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleClick (item) {
      this.$emit('clickItem', item)
    }
  }
}
</script>

<style lang="less" scoped>
    .play-list{
        li{
            width: 220px;
            display: inline-block;
            margin-bottom: 25px;
            margin-right: 25px;
            color:24px;
            color:#333;
            vertical-align: top;
            position: relative;
            &:nth-child(3n) {
                margin-right: 0;
                //每三个对象中最后一个对象的右边距是0
            }
            img{
                width: 220px;
                height: 220px;
                margin-bottom: 15px;
            }
            i{
                position: absolute;
                top: 170px;
                right: 10px;
                font-size: 40px;
                color: white;
            }
        }
    }
</style>
