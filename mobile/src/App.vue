<template>
  <div id="app">
    <router-view/>
    <v-player></v-player>
  </div>
</template>

<script>
import Player from './components/player'

export default {
  name: 'app',
  components: {
    'v-player': Player
  }
}
</script>
<style lang="less"></style>
