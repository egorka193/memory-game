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
import { ref } from 'vue';
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
  setup(props, context) {
    const sortedWays = ref([]);

    const shuffleWays = () => {
      const cloneWays = [...props.collection];
      cloneWays.sort(() => Math.random() - 0.5);
      sortedWays.value = cloneWays;
    };
    const rememberCard = (value) => {
      shuffleWays();
      context.emit('rememberCard', value);
    };

    return {
      sortedWays,
      rememberCard,
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
  // data() {
  //   return {
  //     sortedWays: [],
  //   };
  // },
  // watch: {
  //   collection: {
  //     handler(newNal) {
  //       this.sortedWays = newNal;
  //     },
  //     immediate: true,
  //   },
  // },
  // methods: {
  //   rememberCard(value) {
  //     this.shuffleWays();
  //     this.$emit('rememberCard', value);
  //   },
  //   shuffleWays() {
  //     const cloneWays = [...this.collection];
  //     cloneWays.sort(() => Math.random() - 0.5);
  //     this.sortedWays = cloneWays;
  //   },
  // },
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
