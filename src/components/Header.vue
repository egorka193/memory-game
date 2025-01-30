<template>
  <header class="header">
    <div class="">
      <h2 class="header__title">Anime Memory Game</h2>
      <p class="header__text">Get points by clicking on an image but don't click on any more than once!</p>
    </div>
    <div>
      <button 
        class="finishTheGame"
        @click="finishTheGame"
      >
        GIVE UP
      </button>
    </div>
    <div class="header__score">
      <p>Score: {{ score }}</p>
      <p>Best score: {{ bestScore }}</p>
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
    emits: ['finishTheGame'],
    methods: {
      finishTheGame(){
        this.$emit('finishTheGame')
      }
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
  .finishTheGame{
    margin: 10px;
    cursor: pointer;
    font-size: 40px;
    color: rgb(209, 157, 3);
    background-color: #050505;
    border: none;
    font-weight: 600;
  }
</style>
