<template>
  <Header 
    :score="selectedCards.length"
    :bestScore="bestScore"
    @finishTheGame="gameOver"
    @showSettings="showSettings"
  />
  <Hero 
    :ways="ways"
    @rememberCard="addCard"
  />
  <Settings 
    :setting="setting"
    @closeSettings="closeSettings"
    @giveUP="gameOver"
  />
</template>


<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Settings from './components/Settings.vue'
import { getAnimeCollection } from './data/cards.js'

export default {
  components: {Header, Hero, Settings},
  data(){
    return{
      ways: getAnimeCollection(),
      selectedCards: [],
      bestScore: 0,
      massage: '',
      setting: false
    }
  },
  methods: {
    addCard(value){
      this.massage = ''
      if(!this.selectedCards.includes(value)){
        this.selectedCards.push(value);
        this.ways.sort(() => Math.random() - 0.5);
      } else {
        this.gameOver()
      }
      console.log(value);
    },
    gameOver() {
      this.ways.sort(() => Math.random() - 0.5);
      this.setting = false
      if(this.selectedCards.length > this.bestScore){
        this.bestScore = this.selectedCards.length
        this.massage = 'HEY, BRO, NICE TRY'
      }
      if(this.selectedCards.length < this.bestScore){
        this.massage = 'HEY, BRO, BAD TRY '
      }
      this.selectedCards = []
    },
    showSettings(){
      this.setting = true
    },
    closeSettings(){
      this.setting = false
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
