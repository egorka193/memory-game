import { createStore } from 'vuex';
import { getAllCollection, ANIME } from '../data/cards';

export default createStore({
  state() {
    return {
      collections: getAllCollection(),
      selectedCards: [],
      bestScore: 0,
      setting: false,
      endGame: false,
      currentCollectionName: ANIME,
    };
  },
  getters: {
    currentCollection(state) {
      return state.collections[state.currentCollectionName];
    },
  },
  mutations: {
    setEndGame(state, payload) {
      state.endGame = payload;
    },
    setSettings(state, payload) {
      state.setting = payload;
    },
    addSelectedCard(state, payload) {
      state.selectedCards.push(payload);
    },
    setBestScore(state) {
      state.bestScore = state.selectedCards.length;
    },
    changeCollection(state, payload) {
      state.currentCollectionName = payload;
      state.selectedCards.length = 0;
      state.bestScore = 0;
    },
    clearSelectedCards(state) {
      state.selectedCards = [];
    },
  },
  actions: {
    showSettings(context) {
      context.commit('setSettings', true);
    },
    closeSettings(context) {
      context.commit('setSettings', false);
    },
    rememberCard(context, payload) {
      if (!context.state.selectedCards.includes(payload)) {
        context.commit('addSelectedCard', payload);
      } else {
        if (context.state.selectedCards.length > context.state.bestScore) {
          context.commit('setBestScore');
        }
        context.commit('setEndGame', true);
        context.commit('setSettings', false);
      }
    },
    changeCollection(context, payload) {
      context.commit('changeCollection', payload);
    },
    restart(context) {
      context.commit('setEndGame', false);
      context.commit('clearSelectedCards');
      context.commit('setSettings', false);
    },
    giveUP(context) {
      context.commit('setEndGame', true);
      context.commit('setSettings', false);
    },
    apply(context, payload) {
      context.commit('changeCollection', payload);
      context.commit('setSettings', false);
    },
  },
});
