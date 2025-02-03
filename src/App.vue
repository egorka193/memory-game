<template>
  <Header 
    :score="selectedCards.length"
    :bestScore="bestScore"
    @finishTheGame="gameOver"
    @showSettings="showSettings"
  />
  <p class="message">
    {{ massage }}
  </p>
  <div
    v-if="setting"
    id="overlay"
    @click="closeSettings"
  >
  </div>
  <Settings 
    :setting="setting"
    @closeSettings="closeSettings"
    @giveUP="gameOver"
  />
  <Hero 
    :ways="ways"
    @rememberCard="addCard"
  />
</template>


<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Settings from './components/Settings.vue'

export default {
  components: {Header, Hero, Settings},
  data(){
    return{
      ways: [
        {
          url: '/src/img/anime/anime_blonde.jpg',
          name: 'Blonde',
        },
        {
          url: '/src/img/anime/anime_blonde_blad.jpg', 
          name: 'Blonde too',
        },
        {
          url: '/src/img/anime/anime_finger_on_face.jpg',
          name: 'Fingers',
        },
        {
          url: '/src/img/anime/anime_blonde_cry.jpg',
          name: 'Crying Baby',
        },
        {
          url: '/src/img/anime/anime_gitrl.png',
          name: 'Girl',
        },
        {
          url: '/src/img/anime/anime_man_cry.jpg',
          name: 'Man Crying',
        },
        {
          url: '/src/img/anime/anime_man.jpg',
          name: 'Man',
        },
        {
          url: '/src/img/anime/anime_telka.jpg',
          name: 'Blue Hairs',
        },
        {
          url: '/src/img/anime/anime_warrior.jpg',
          name: 'White Hairs',
        },
        {
          url: '/src/img/anime/steam_anime_girl.gif',
          name: 'Steam Girl',
        },
        {
          url: '/src/img/anime/tipo_krutoi_anime_2_0.jpg',
          name: 'Сollar',
        },
        {
          url: '/src/img/anime/tipo_krutoi_anime.jpg',
          name: 'Сollar 2',
        },
      ],
      selectedCards: [],
      bestScore: 0,
      massage: '',
      setting: true
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
#overlay {
  position: fixed; 
  display: block; 
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); 
  z-index: 1; 
  cursor: pointer;
}
</style>
