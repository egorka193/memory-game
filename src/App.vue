<template>
  <Header
    :score="selectedCards.length"
    :bestScore="bestScore"
    @showSettings="showSettings"
  />
  <Hero
    :collection="currentCollection"
    @rememberCard="addCard"
  />
  <Settings
    v-if="setting"
    :currentCollectionName="currentCollectionName"
    @closeSettings="closeSettings"
    @giveUP="gameOver"
    @apply="changeCollection"
  />
  <EndGame
    v-if="endGame"
    :selectedCards="selectedCards"
    :collectionLength="currentCollection.length"
    @restart="restart"
  />
</template>

<script>
import EndGame from './components/EndGame.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Settings from './components/Settings.vue';
// eslint-disable-next-line import/extensions
import { getAllCollection, ANIME } from './data/cards.js';

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
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
      currentCollectionName: ANIME,
    };
  },
  computed: {
    currentCollection() {
      return this.collections[this.currentCollectionName];
    },
  },
  methods: {
    addCard(value) {
      if (!this.selectedCards.includes(value)) {
        this.selectedCards.push(value);
      } else {
        this.gameOver();
      }
    },
    gameOver() {
      this.endGame = true;
      this.setting = false;
      if (this.selectedCards.length > this.bestScore) {
        this.bestScore = this.selectedCards.length;
      }
    },
    changeCollection(value) {
      this.currentCollectionName = value;
      this.setting = false;
      this.bestScore = 0;
    },
    showSettings() {
      this.setting = true;
    },
    closeSettings() {
      this.setting = false;
    },
    restart() {
      this.endGame = false;
      this.selectedCards = [];
    },
  },
};
</script>

<style scoped>
</style>
