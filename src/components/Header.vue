<template>
  <div class="header">
    <img
      class="header__logo header__logo--bonus"
      v-if="currentGameType === 1"
      src="../assets/logo-bonus.svg"
      alt="logo"
    />
    <img class="header__logo" v-else src="../assets/logo.svg" alt="logo" />

    <div class="header__score score">
      <div class="score__name">score</div>
      <div class="score__value">{{ $store.state.score }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'c-header',
  computed: {
    ...mapGetters(['currentGameType']),
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
