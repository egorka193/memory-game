<template>
  <Header />
  <Hero />
  <Settings
    v-if="setting"
  />
  <EndGame
    v-if="endGame"
  />
</template>

<script>
import EndGame from './components/EndGame.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Settings from './components/Settings.vue';
// eslint-disable-next-line import/extensions
import { getAllCollection, DOTA } from './data/cards.js';

export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header, Hero, Settings, EndGame,
  },
  data() {
    return {
      collections: getAllCollection(),
      selectedCards: [],
      bestScore: 0,
      setting: false,
      endGame: false,
      currentCollectionName: DOTA,
    };
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    setting() {
      return this.$store.state.setting;
    },
    // eslint-disable-next-line vue/no-dupe-keys
    endGame() {
      return this.$store.state.endGame;
    },
  },
};
</script>

<style scoped>
</style>
