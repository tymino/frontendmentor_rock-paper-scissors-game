<template>
  <div class="header">
    <img
      class="header__logo"
      :class="setClassLogo"
      :src="setSrcLogo"
      alt="logo"
      draggable="false"
    />

    <div class="header__score score">
      <div class="score__name">score</div>
      <div class="score__value">{{ score }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'c-header',
  computed: {
    ...mapState({
      score: (state) => state.score,
      currentGameType: (state) => state.currentGameType,
    }),
    setClassLogo() {
      return this.currentGameType === 1 && 'header__logo--bonus';
    },
    setSrcLogo() {
      return `/images/logo${this.currentGameType === 1 ? '-bonus' : ''}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 4px solid var(--color-header-outline);

  /* &__logo {
  } */
}

.score {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  background: var(--color-white);
  border-radius: calc(var(--border-radius) - 2px);

  &__name {
    color: var(--color-text-score);
    font-size: 1.2rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  &__value {
    color: var(--color-header-outline);
    font-size: 3.8rem;
    font-weight: var(--font-weight-bold);
    line-height: 3.8rem;
  }
}
</style>
