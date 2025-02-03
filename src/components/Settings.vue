
<template>
  <div class="modal">
    <div
      v-if="setting"
      class="overlay"
      @click="closeSettings"
    ></div>
    <div
      v-if="setting"
      class="setting__menu"
    >
      <div class="menu__top">
        <h3 class="menu__top-title">SETTINGS</h3>
        <div
          class="menu__top-cross"
          @click="closeSettings"
        >
          &#10006;
        </div>
      </div>
      <div class="menu__item">
        <div class="menu__item-finish">
          <button 
            class="menu__item-give-up"
            @click="giveUP"
          >
            GIVE UP
          </button>
        </div>
      </div>
      <div class="menu__item hidden">
        <div class="collection-selector__label">
          You can select another collection of cards
        </div>
        <div class="collection-selector__controller">
          <select>
            <option value="anime">Anime</option>
            <option value="dota">Dota heroes</option>
            <option value="series">Pipular series</option>
          </select>
        </div>
        <button class="collection-selector__controller">
          Apply
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
.menu__item-give-up{
  cursor: pointer;
  font-size: 20px;
  color: rgb(209, 157, 3);
  background-color: rgb(54, 85, 5);
  border-radius: 20px;
  padding: 10px 20px;
  border: none;
}
.menu__item-give-up:hover{
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
.menu__top-cross{
  cursor: pointer;
  color: black;
  position: absolute;
  right: 5px;
}
.menu__top-cross:hover{
  transition: all 0.5s ease;
  color: aliceblue;
}
.menu__top-title{
  margin: 0 auto;
  color: rgb(215, 181, 80);
  font-weight: 600;
}
.menu__top{
  position: relative;
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
.overlay {
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
.hidden{
  display: none;
}
</style>
