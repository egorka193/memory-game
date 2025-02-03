
<template>
  <div
    v-if="setting"
    class="setting__menu"
  >
    <div class="menu__top">
      <h3 class="menu__top-title">SETTINGS</h3>
      <div
        class="cross"
        @click="closeSettings"
      >
        &#10006;
      </div>
    </div>
    <div class="menu__item">
      <div class="give__up">
        <button 
          class="finishTheGame"
          @click="giveUP"
        >
          GIVE UP
        </button>
      </div>
    </div>
  </div>
  
  
</template>


<script>
export default {
  props:{
    setting: {
      type: Boolean,
      required: true
    }
  },
  emits:['closeSettings', 'giveUP'],
  methods:{
    closeSettings(){
      this.$emit('closeSettings')
    },
    giveUP(){
      this.$emit('giveUP')
    }
  }
}
</script>


<style scoped>
.finishTheGame{
  margin-right: 20px;
  cursor: pointer;
  font-size: 20px;
  color: rgb(209, 157, 3);
  background-color: rgb(54, 85, 5);
  border-radius: 20px;
  padding: 10px 20px;
  border: none;
}
.finishTheGame:hover{
  transition: all 0.5s ease;
  background-color: rgb(98, 152, 11);
}
.setting__menu{
  background-color: rgb(107 169 7);
  width: 500px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.cross{
  cursor: pointer;
  color: black;
  padding-right: 10px;
}
.cross:hover{
  transition: all 0.5s ease;
  color: aliceblue;
}
.give__up{
  display: flex;
}
.menu__top-title{
  margin: 0 auto;
  color: rgb(215, 181, 80);
  font-weight: 600;
}
.menu__top{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
}
.menu__item{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}
</style>
