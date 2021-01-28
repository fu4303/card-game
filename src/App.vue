<template>
  <div id="app">
    <Instructions />
    <Score />
    <Card :card="{suite:'hearts', value: 14}" face-down />    
    <action-bar />
  </div>
</template>

<script>
import Card from '@/components/Card'
import Score from '@/components/Score'
import ActionBar from '@/components/ActionBar'
import Instructions from '@/components/Instructions'
import * as Game from '@/game'

export default {
  name: 'App',
  components: {Card, Score, ActionBar, Instructions},
  data(){ return {
    deck: []
  }},

  mounted(){
    this.deck = Game.generateDeck()
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: grey;
}
</style>
