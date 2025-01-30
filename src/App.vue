<template>
  <Header 
    :score="selectedCards.length"
    :bestScore="bestScore"
    @finishTheGame="gameOver"
  />
  <p class="message">
    {{ massage }}
  </p>
  <Hero 
    :ways="ways"
    @rememberCard="addCard"
  />
  <p>{{ selectedCards }}</p>
</template>


<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'

export default {
  components: {Header, Hero},
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
      massage: ''
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
      if(this.selectedCards.length > this.bestScore){
        this.bestScore = this.selectedCards.length
        this.massage = 'HEY, BRO, NICE TRY'
      }
      if(this.selectedCards.length < this.bestScore){
        this.massage = 'HEY, BRO, BAD TRY '
      }
      this.selectedCards = []
    },
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
