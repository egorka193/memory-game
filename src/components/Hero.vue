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
  data() {
    return {
      sortedWays: [],
    };
  },
  computed: {
    collection() {
      return this.$store.getters.currentCollection;
    },
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
      this.$store.dispatch('rememberCard', value);
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
