<template>
  <div class="header">
    <img class="header__logo" src="../assets/images/logo.svg" alt="logo" />

    <div class="header__score">
      <div class="header__score-name">score</div>
      <div class="header__score-value">{{ $store.state.score }}</div>
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
  border: 1px solid black;
}
</style>
