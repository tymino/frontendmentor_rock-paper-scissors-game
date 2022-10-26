<template>
  <c-header />

  <my-button>click</my-button>
</template>

<script>
import CHeader from '@/components/Header.vue';

import MyButton from '@/components/UI/MyButton.vue';

export default {
  name: 'App',
  components: {
    CHeader,
    MyButton,
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
  --color-paper-gradient: linear-gradient(
    to bottom,
    hsl(230, 89%, 62%),
    hsl(230, 89%, 65%)
  );
  --color-rock-gradient: linear-gradient(
    to bottom,
    hsl(349, 71%, 52%),
    hsl(349, 70%, 56%)
  );
  --color-lizard-gradient: linear-gradient(
    hsl(261, 73%, 60%),
    hsl(261, 72%, 63%)
  );
  --color-cyan-gradient: linear-gradient(
    hsl(189, 59%, 53%),
    hsl(189, 58%, 57%)
  );

  --color-radial-gradient: linear-gradient(
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );

  --color-dark-text: hsl(229, 25%, 31%);
  --score-text: hsl(229, 64%, 46%);
  --header-outline: hsl(217, 16%, 45%);

  --font-family: 'Barlow Semi Condensed', sans-serif;
  --font-weight-normal: 600;
  --font-weight-bold: 700;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cube {
  width: 100px;
  height: 100px;
  background: var(--color-cyan-gradient);
}
</style>
