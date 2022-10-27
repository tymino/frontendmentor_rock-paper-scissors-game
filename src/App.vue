<template>
  <div class="content">
    <Header />

    <GameBoard @chipClick="updateStep" />
  </div>
  <div class="button-container">
    <Button @click="$store.commit('changeGameType')">click</Button>
    <div>{{ this.timer }}</div>
  </div>
</template>

<script>
import Button from '@/components/UI/Button.vue';

import GameBoard from '@/components/GameBoard.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Button,
    GameBoard,
    Header,
  },
  data() {
    return {
      timer: 10,
    };
  },
  methods: {
    startTimer() {
      const interval = setInterval(() => {
        if (this.timer === 0) {
          clearInterval(interval);
        } else {
          this.timer--;
        }
      }, 1000);
    },
    updateStep(chipIndex) {
      console.log('chipIndex', chipIndex);
    },
  },
  mounted() {
    this.startTimer();
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
  /* --color-paper-shadow: hsl(230, 73%, 41%); */

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
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 40px 20px;

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
  justify-self: flex-end;
}
</style>
