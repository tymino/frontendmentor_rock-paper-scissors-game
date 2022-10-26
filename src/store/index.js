import { createStore } from 'vuex';

/*
gameType: 0 - original,
          1 - bonus,
*/

export default createStore({
  state: () => ({
    gameType: ['original', 'bonus'],
    currentGameType: 0,
    score: 12,
  }),
  getters: {
    currentGameType(state) {
      return `currentGameType: ${state.currentGameType}`;
    },
  },
  mutations: {
    increment: (state, num) => (state.counter += num),
    decrement: (state, num) => (state.counter -= num),
  },
  actions: {},
});
