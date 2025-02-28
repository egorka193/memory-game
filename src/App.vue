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

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header, Hero, Settings, EndGame,
  },
  computed: {
    setting() {
      return this.$store.state.setting;
    },
    endGame() {
      return this.$store.state.endGame;
    },
  },
};
</script>

<style scoped>
</style>
