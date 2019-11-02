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
