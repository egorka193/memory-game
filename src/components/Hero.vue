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
import Card from './Card.vue';

export default {
  components: { Card },
  props: {
    collection: {
      type: Array,
      required: true,
    },
  },
  emits: ['rememberCard'],
  data() {
    return {
      sortedWays: [],
    };
  },
  watch: {
    collection: {
      handler(newNal) {
        this.sortedWays = newNal;
      },
      immediate: true,
    },
  },
  methods: {
    rememberCard(value) {
      this.shuffleWays();
      this.$emit('rememberCard', value);
    },
    shuffleWays() {
      const cloneWays = [...this.collection];
      cloneWays.sort(() => Math.random() - 0.5);
      this.sortedWays = cloneWays;
    },
  },
};
</script>

<style scoped>
.cards{
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
