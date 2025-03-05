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
import { ref, computed } from 'vue';
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
  setup() {
    const collections = ref(getAllCollection());
    const selectedCards = ref([]);
    const bestScore = ref(0);
    const setting = ref(false);
    const endGame = ref(false);
    const currentCollectionName = ref(DOTA);

    const currentCollection = computed(() => collections.value[currentCollectionName.value]);

    const gameOver = () => {
      endGame.value = true;
      setting.value = false;
      if (selectedCards.value.length > bestScore.value) {
        bestScore.value = selectedCards.value.length;
      }
    };
    const addCard = (value) => {
      if (!selectedCards.value.includes(value)) {
        selectedCards.value.push(value);
      } else {
        gameOver();
      }
    };
    const changeCollection = (value) => {
      currentCollectionName.value = value;
      setting.value = false;
      bestScore.value = 0;
    };
    const showSettings = () => {
      setting.value = true;
    };
    const closeSettings = () => {
      setting.value = false;
    };
    const restart = () => {
      endGame.value = false;
      selectedCards.value = [];
    };
    return {
      collections,
      selectedCards,
      bestScore,
      setting,
      endGame,
      currentCollectionName,
      currentCollection,
      addCard,
      gameOver,
      changeCollection,
      showSettings,
      closeSettings,
      restart,
    };
  },
  // data() {
  //   return {
  //     collections: getAllCollection(),
  //     selectedCards: [],
  //     bestScore: 0,
  //     setting: false,
  //     endGame: false,
  //     currentCollectionName: DOTA,
  //   };
  // },
  // computed: {
  //   currentCollection() {
  //     return this.collections[this.currentCollectionName];
  //   },
  // },
  // methods: {
  //   addCard(value) {
  //     if (!this.selectedCards.includes(value)) {
  //       this.selectedCards.push(value);
  //     } else {
  //       this.gameOver();
  //     }
  //   },
  //   gameOver() {
  //     this.endGame = true;
  //     this.setting = false;
  //     if (this.selectedCards.length > this.bestScore) {
  //       this.bestScore = this.selectedCards.length;
  //     }
  //   },
  //   changeCollection(value) {
  //     this.currentCollectionName = value;
  //     this.setting = false;
  //     this.bestScore = 0;
  //   },
  //   showSettings() {
  //     this.setting = true;
  //   },
  //   closeSettings() {
  //     this.setting = false;
  //   },
  //   restart() {
  //     this.endGame = false;
  //     this.selectedCards = [];
  //   },
  // },
};
</script>

<style scoped>
</style>
