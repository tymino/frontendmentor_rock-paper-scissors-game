import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    counter: 0,
  }),
  getters: {
    withText(state) {
      return `Счетчик: ${state.counter}`;
    },
  },
  mutations: {
    increment: (state, num) => (state.counter += num),
    decrement: (state, num) => (state.counter -= num),
  },
  actions: {},
});
