<template>
  <header class="header">
    <div class="">
      <h2 class="header__title">Anime Memory Game</h2>
      <p class="header__text">Get points by clicking on an image but don't click on any more than once!</p>
    </div>
    <div class="score__wrapper">
      <button
        @click="showSettings" 
        class="settings"
      >
      </button>
      <div class="header__score">
        <p>Score: {{ score }}</p>
        <p>Best score: {{ bestScore }}</p>
      </div>
    </div>
  </header>
</template>


<script>
  export default{
    props: {
      score: {
        type: Number,
        required: true
      },
      bestScore: {
        type: Number,
        required: true
      }
    },
    emits: [ 'showSettings'],
    methods: {
      showSettings(){
        this.$emit('showSettings')
      },
    }
  }
</script>


<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  color: rgb(209, 157, 3);
  padding: 5px;
  margin: 10px;
}
.header__title{
  font-size: 44px;
  font-weight: 800;
}
.header__text{
  font-size: 14px;
  margin-top: 30px;
  font-weight: 800;
}
.settings::after{
  content: '\2699';
  color: rgb(209, 157, 3);
  cursor: pointer;
}
.settings{
  font-size: 40px;
  background-color: transparent;
  border: none;
  display: flex;
}
.score__wrapper{
  display: flex;
  gap: 10px;
}
</style>
⚙	2699	GEAR
⛭	26ED	GEAR WITHOUT HUB