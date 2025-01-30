<template>
  <div class="cards">
    <Card 
      v-for="(el, i) in ways"
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
  props: {
    ways: {
      type: Array,
      required: true
    }
  },
  emits: ['rememberCard'],
  methods: {
    rememberCard(value){
      console.log(value);
      this.$emit('rememberCard', value)
    },
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
