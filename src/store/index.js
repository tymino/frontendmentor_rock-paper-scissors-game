import { createStore } from 'vuex';

//  currentGameType: 0 - original game
//                   1 - bonus game

//  gameChipsName: ['rock', 'scissors', 'paper', 'lizard', 'spock']
//                 [0, 1, 2, 3, 4] - index to name

export default createStore({
  state: () => ({
    score: 0,
    currentGameType: 0,
    gameTypeNames: ['pentagon', 'triangle'],
    gameChipsName: ['rock', 'scissors', 'paper', 'lizard', 'spock'],
    RulesOfTheGame: [
      { name: 0, weakness: [2, 4] },
      { name: 1, weakness: [4, 0] },
      { name: 2, weakness: [1, 3] },
      { name: 3, weakness: [0, 1] },
      { name: 4, weakness: [2, 3] },
    ],
    isRunGame: false,
    delayOfSteps: {
      enemyStep: 500,
      result: 300,
    },
    dataOfGameLoop: [],
  }),
  getters: {
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
    chipSelected(state) {
      state.isRunGame = true;
    },
  },
  actions: {
    startCounter({ state }, { chipIndex }) {
      state.isRunGame = true;
      console.log('startCounter', chipIndex);

      let timer = setTimeout(() => {
        console.log('TIMER', timer);
        clearTimeout(timer);
      }, 1000);

      state.counter = false;
    },
  },
});
