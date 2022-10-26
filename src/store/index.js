import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    gameType: ['original', 'bonus'],
    currentGameType: 0,
    score: 12,
  }),
  getters: {
    currentGameType(state) {
      return state.currentGameType;
    },
  },
  mutations: {
    increment: (state, num) => (state.counter += num),
    decrement: (state, num) => (state.counter -= num),
  },
  actions: {},
});
