<template>
  <Header 
    :score="selectedCards.length"
    :bestScore="bestScore"
    @finishTheGame="gameOver"
    @showSettings="showSettings"
  />
  <Hero 
    :ways="currentCollection"
    @rememberCard="addCard"
  />
  <Settings 
    v-if="setting"
    :massage="massage"
    @closeSettings="closeSettings"
    @giveUP="gameOver"
    @apply="changeCollection"
  />
  <EndGame
    v-if="endGame"
    :massage="massage"
    :selectedCards="selectedCards"
    :ways="currentCollection"
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
      console.log(value);
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
      console.log(this.cardCollectionName);
      this.setting = false
      this.bestScore = 0
    },
    showSettings(){
      this.setting = true
    },
    closeSettings(){
      this.setting = false
    },
    closeFinish(){
      this.endGame = false
      this.selectedCards = []
    },
    restart(){
      this.endGame = false
      this.selectedCards = []
    }
  }
}
</script>


<style scoped>
.message{
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: rgb(209, 157, 3);
}
</style>
