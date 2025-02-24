<template>
  <Header 
    :score="selectedCards.length"
    :bestScore="bestScore"
    @showSettings="showSettings"
  />
  <Hero 
    :collection="currentCollection"
    @rememberCard="addCard"
  />
  <Settings 
    v-if="setting"
    :currentCollectionName="currentCollectionName"
    :massage="massage"
    @closeSettings="closeSettings"
    @giveUP="gameOver"
    @apply="changeCollection"
  />
  <EndGame
    v-if="endGame"
    :selectedCards="selectedCards"
    :collectionLength="currentCollection.length"
    @closeFinish="closeFinish"
    @restart="restart"
  />
</template>


<script>
import EndGame from './components/EndGame.vue';
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Settings from './components/Settings.vue'
import { getAllCollection } from './data/cards.js'

export default {
  components: {Header, Hero, Settings, EndGame},
  data(){
    return{
      collections: getAllCollection(),
      selectedCards: [],
      bestScore: 0,
      setting: false,
      endGame: false,
      currentCollectionName: 'Anime'
    }
  },
  computed: {
    currentCollection(){
      return this.collections[this.currentCollectionName]
    },
  },
  methods: {
    addCard(value){
      if(!this.selectedCards.includes(value)){
        this.selectedCards.push(value);
      } else {
        this.gameOver()
      }
    },
    gameOver() {
      this.endGame = true
      this.setting = false
      if(this.selectedCards.length > this.bestScore){
        this.bestScore = this.selectedCards.length
      }
    },
    changeCollection(value){
      this.currentCollectionName = value
      this.setting = false
      this.bestScore = 0
    },
    showSettings(){
      this.setting = true
    },
    closeSettings(){
      this.setting = false
    },
    restart(){
      this.endGame = false
      this.selectedCards = []
    }
  }
}
</script>


<style scoped>
</style>
