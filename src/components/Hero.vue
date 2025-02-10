<template>
  <div class="cards">
    <Card 
      v-for="(el, i) in sortedWays"
      :key="i"
      :value="el"
      @chooseCard="(value) => rememberCard(value)"
    />
  </div>

  
</template>


<script>
import Card from './Card.vue'

export default {
  components: { Card, },
  data(){
    return{
      sortedWays: []
    }
  },
  watch: {
    ways: {
      handler(newNal) {
        this.sortedWays = newNal
      },
      immediate: true
    }
  },
  props: {
    ways: {
      type: Array,
      required: true
    }
  },
  emits: ['rememberCard'],
  methods: {
    rememberCard(value){
      this.shuffleWays()
      console.log(value);
      this.$emit('rememberCard', value)
    },
    shuffleWays(){
      const cloneWays = [...this.ways]
      cloneWays.sort(() => Math.random() - 0.5);
      this.sortedWays = cloneWays
    }
  }
}
</script>


<style scoped>
.cards{
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
