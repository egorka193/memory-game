<template>
  <Modal
    :title="showMassage"
    @close="closeFinish"
  >
    <div class="finish">
      <p class="finish__score">{{ count }}</p>
      <button
        class="button"
        @click="restart"
      >
        RESTART
      </button>
    </div>
  </Modal>
</template>


<script>
import Modal from './Modal.vue';


export default {
  components:{ Modal },
  // data(){
  //   return{
  //     massage: '',
  //   }
  // },
  props:{
    selectedCards: {
      type: Array,
      required: true
    },
    endGame: {
      type: Boolean,
      required: true
    },
    ways: {
      type: Array,
      required: true
    }
  },
  computed:{
    count(){
      return `${this.selectedCards.length}/${this.ways.length}`
    },
    showMassage(){
      if(this.selectedCards.length === 12){
        return 'YOU WIN'
      } else {
        return 'NICE TRY'
      }
    }
  },
  emits:['closeFinish', 'restart'],
  methods:{
    closeFinish(){
      this.$emit('closeFinish')
    },
    restart(){
      this.$emit('restart')
    },
  }
}
</script>


<style scoped>
.finish__title{
  position: relative;
  display: flex;
  justify-content: center;
  color: rgb(215, 181, 80);
  font-weight: 600;
  margin: 10px;
}
.button{
  display: block;
  margin: 10px auto;
  cursor: pointer;
}
.finish__score{
  display: flex;
  justify-content: center;
  color: rgb(215, 181, 80);
  font-weight: 600;
  margin: 10px;
  font-size: 32px;
}
.finish__cross{
  cursor: pointer;
  color: black;
  position: absolute;
  right: 20px;
  top: 10px;
}
.finish__cross:hover{
  transition: all 0.5s ease;
  color: aliceblue;
}
</style>
