<template>
  <div class="content">
    <Header :score="score" :currentGameType="currentGameType" />
    <Rules
      v-if="isVisibleRules"
      :currentGameType="currentGameType"
      @hide-rules="toggleRules(false)"
    />

    <GameLoop v-if="isRunGame" />
    <GameBoard v-else />
  </div>
  <div class="button-container">
    <Button v-if="!isRunGame" @click="$store.commit('changeGameType')"
      >switch</Button
    >
    <Button @click="toggleRules(true)">rules</Button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Button from '@/components/UI/Button.vue';
import Rules from '@/components/UI/Rules.vue';

import GameBoard from '@/components/GameBoard.vue';
import GameLoop from '@/components/GameLoop.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Button,
    Rules,
    GameBoard,
    GameLoop,
    Header,
  },
  data() {
    return {
      isVisibleRules: true,
      timer: 10,
    };
  },
  methods: {
    toggleRules(isOpen) {
      this.isVisibleRules = isOpen;
    },
    hideRules() {
      this.isVisibleRules = false;
    },
  },
  computed: {
    ...mapState({
      score: (state) => state.score,
      isRunGame: (state) => state.isRunGame,
      currentGameType: (state) => state.currentGameType,
    }),
  },
};
</script>

<style lang="scss">
:root {
  --color-scissors-gradient: linear-gradient(
    to bottom,
    hsl(39, 89%, 49%),
    hsl(40, 84%, 53%)
  );
  --color-scissors-shadow: hsl(40, 84%, 33%);

  --color-paper-gradient: linear-gradient(
    to bottom,
    hsl(230, 89%, 62%),
    hsl(230, 89%, 65%)
  );
  --color-paper-shadow: hsl(230, 89%, 40%);

  --color-rock-gradient: linear-gradient(
    to bottom,
    hsl(349, 71%, 52%),
    hsl(349, 70%, 56%)
  );
  --color-rock-shadow: hsl(349, 70%, 36%);

  --color-lizard-gradient: linear-gradient(
    hsl(261, 73%, 60%),
    hsl(261, 72%, 63%)
  );
  --color-lizard-shadow: hsl(261, 72%, 43%);

  --color-spock-gradient: linear-gradient(
    hsl(189, 59%, 53%),
    hsl(189, 58%, 57%)
  );
  --color-spock-shadow: hsl(189, 58%, 37%);

  --color-radial-gradient: linear-gradient(
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );

  --color-white: hsl(0, 0%, 100%);
  --color-text-dark: hsl(229, 25%, 31%);
  --color-text-score: hsl(229, 64%, 46%);
  --color-header-outline: hsl(217, 16%, 45%);

  --font-size: 16px;
  --font-family: 'Barlow Semi Condensed', sans-serif;
  --font-weight-normal: 600;
  --font-weight-bold: 700;

  --border-radius: 10px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: var(--font-size);
  font-family: var(--font-family);
  font-weight: var(--font-weight-normal);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 40px 40px;

  background: var(--color-radial-gradient);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
}

.button-container {
  align-self: flex-end;

  & > button:nth-child(2n) {
    margin-left: 20px;
  }
}

@media (max-width: 675px) {
  .button-container {
    align-self: center;
  }
}
</style>
