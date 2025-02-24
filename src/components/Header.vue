<template>
  <header class="header">
    <div class="header-left">
      <h2 class="header__title">Anime Memory Game</h2>
      <p class="header__text">Get points by clicking on an image but don't click on any more than once!</p>
    </div>
    <div class="header-right">
      <button
        class="header__settings-btn"
        @click="showSettings" 
      ></button>
      <div class="header__score">
        <div>Score: {{ score }}</div>
        <div>Best score: {{ bestScore }}</div>
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
  emits: ['showSettings'],
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
  padding: 15px;
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
.header__settings-btn::after{
  content: '\2699';
  color: rgb(209, 157, 3);
  cursor: pointer;
}
.header__settings-btn{
  font-size: 40px;
  background-color: transparent;
  border: none;
  display: flex;
}
.header-right{
  display: flex;
  gap: 10px;
  align-items: flex-start;
}
</style>