import { createStore } from 'vuex';

//  currentGameType: 0 - original game
//                   1 - bonus game

//  gameChipsName: ['rock', 'scissors', 'paper', 'lizard', 'spock']
//                 [0, 1, 2, 3, 4] - index to name

export default createStore({
  state: () => ({
    score: 0,
    currentGameType: 0,
    nameOfTheGameChips: ['rock', 'scissors', 'paper', 'lizard', 'spock'],
    namesOfGameTypes: ['pentagon', 'triangle'],
    namesOfGameResults: ['you lose', 'you win', 'draw'],
    rulesOfTheGame: [
      { name: 0, weakness: [2, 4] },
      { name: 1, weakness: [4, 0] },
      { name: 2, weakness: [1, 3] },
      { name: 3, weakness: [0, 1] },
      { name: 4, weakness: [2, 3] },
    ],
    isRunGame: false,
    hasWinner: -1,
    delayOfSteps: {
      enemyStep: 500,
      result: 750,
    },
    dataOfGameLoop: [],
  }),
  getters: {
    amountGameChips(state) {
      return state.currentGameType === 0
        ? state.nameOfTheGameChips.slice(0, 3)
        : state.nameOfTheGameChips;
    },
    getChipsDataInGameLoop(state) {
      return state.dataOfGameLoop.map((chip) => {
        return {
          id: chip,
          name: state.nameOfTheGameChips[chip],
        };
      });
    },
    getWinner(state) {
      return state.namesOfGameResults[state.hasWinner];
    },
  },
  mutations: {
    changeGameType(state) {
      state.score = 0;

      state.currentGameType === 1
        ? (state.currentGameType = 0)
        : (state.currentGameType = 1);
    },
    moveOfEnemy(state) {
      const curentAmountChips =
        state.currentGameType === 0
          ? state.nameOfTheGameChips.slice(0, 3).length
          : state.nameOfTheGameChips.length;

      const botSelection = Math.floor(Math.random() * curentAmountChips);
      state.dataOfGameLoop.push(botSelection);
    },
    startGame(state, chipIndex) {
      state.isRunGame = true;
      state.dataOfGameLoop.push(chipIndex);
    },
    endGame(state) {
      const player = state.dataOfGameLoop[0];
      const bot = state.dataOfGameLoop[1];

      const weaknessOfPlayer = state.rulesOfTheGame[player].weakness;
      const weaknessOfBot = state.rulesOfTheGame[bot].weakness;

      if (weaknessOfPlayer.includes(bot)) {
        state.score -= 3;
        if (state.score < 0) state.score = 0;

        state.hasWinner = 0;
      } else if (weaknessOfBot.includes(player)) {
        state.score += 3;
        state.hasWinner = 1;
      } else {
        state.hasWinner = 2;
      }
    },
    resetGame(state) {
      state.isRunGame = false;
      state.hasWinner = -1;
      state.dataOfGameLoop = [];
    },
  },
  actions: {
    startCounter({ state, commit }, { chipIndex }) {
      const delayEnemyStep = state.delayOfSteps.enemyStep;
      const delayResult = state.delayOfSteps.result;

      commit('startGame', chipIndex);

      setTimeout(() => {
        commit('moveOfEnemy');

        setTimeout(() => {
          commit('endGame');
        }, delayResult);
      }, delayEnemyStep);
    },
  },
});
