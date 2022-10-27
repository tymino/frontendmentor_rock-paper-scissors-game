import { createStore } from 'vuex';

//  currentGameType: 0 - original game
//                   1 - bonus game

//  gameChipsName: ['rock', 'scissors', 'paper', 'lizard', 'spock']
//                 [0, 1, 2, 3, 4] - index to name

export default createStore({
  state: () => ({
    currentGameType: 0,
    score: 0,
    gameChipsName: ['rock', 'scissors', 'paper', 'lizard', 'spock'],
    RulesOfTheGame: [
      { name: 0, weakness: [2, 4] },
      { name: 1, weakness: [4, 0] },
      { name: 2, weakness: [1, 3] },
      { name: 3, weakness: [0, 1] },
      { name: 4, weakness: [2, 3] },
    ],
  }),
  getters: {
    currentGameType(state) {
      return state.currentGameType;
    },
    amountGameChips(state) {
      return state.currentGameType === 0
        ? state.gameChipsName.slice(0, 3)
        : state.gameChipsName;
    },
  },
  mutations: {
    changeGameType(state) {
      state.currentGameType === 1
        ? (state.currentGameType = 0)
        : (state.currentGameType = 1);
    },
  },
  actions: {},
});
