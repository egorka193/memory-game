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
    showSettings(state) {
      state.setting = true;
    },
    addTask(state, payload) {
      if (!state.selectedCards.includes(payload)) {
        state.selectedCards.push(payload);
      } else {
        state.endGame = true;
        state.setting = false;
        if (state.selectedCards.length > state.bestScore) {
          state.bestScore = state.selectedCards.length;
        }
      }
    },
    gameOver(state) {
      state.endGame = true;
      state.setting = false;
      if (state.selectedCards.length > state.bestScore) {
        state.bestScore = state.selectedCards.length;
      }
    },
    changeCollection(state, payload) {
      state.currentCollectionName = payload;
      state.setting = false;
      state.bestScore = 0;
    },
    closeSettings(state) {
      state.setting = false;
    },
    restart(state) {
      state.setting = false;
      state.endGame = false;
      state.selectedCards = [];
    },
  },
  actions: {
    showSettings(context) {
      context.commit('showSettings');
    },
    rememberCard(context, payload) {
      context.commit('addTask', payload);
    },
    closeSettings(context) {
      context.commit('closeSettings');
    },
    changeCollection(context, payload) {
      context.commit('changeCollection', payload);
    },
    gameOver(context) {
      context.commit('gameOver');
    },
    restart(context) {
      context.commit('restart');
    },
    giveUP(context) {
      context.commit('gameOver');
    },
    apply(context, payload) {
      context.commit('changeCollection', payload);
    },
  },
});
