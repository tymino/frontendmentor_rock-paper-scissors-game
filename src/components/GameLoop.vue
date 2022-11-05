<template>
  <div class="loop">
    <div class="loop__container">
      <div class="loop__container-title">you picked</div>
      <Chip
        class="loop__container-chip"
        :chipId="getChipsDataInGameLoop[0].id"
        :chipName="getChipsDataInGameLoop[0].name"
        chipSize="lg"
        isDisableHover
        :isHasWinAura="hasWinner === 1"
      />
    </div>

    <div class="loop__game-info" v-if="hasWinner >= 0">
      <div class="loop__game-info-status">{{ getWinner }}</div>
      <Button class="loop__game-info-button" isSecondary @click="resetGame"
        >play again</Button
      >
    </div>

    <div class="loop__container">
      <div class="loop__container-title">the house picked</div>
      <div class="loop__container-empty" v-if="dataOfGameLoop.length < 2"></div>

      <Chip
        class="loop__container-chip"
        v-else
        :chipId="getChipsDataInGameLoop[1].id"
        :chipName="getChipsDataInGameLoop[1].name"
        chipSize="lg"
        isDisableHover
        :isHasWinAura="hasWinner === 0"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

import Button from '@/components/UI/Button.vue';
import Chip from '@/components/UI/Chip.vue';

export default {
  name: 'game-loop',
  components: {
    Button,
    Chip,
  },
  methods: {
    ...mapMutations(['resetGame']),
  },
  computed: {
    ...mapState({
      dataOfGameLoop: (state) => state.dataOfGameLoop,
      hasWinner: (state) => state.hasWinner,
    }),
    ...mapGetters(['amountGameChips', 'getChipsDataInGameLoop', 'getWinner']),
  },
};
</script>

<style lang="scss" scoped>
.loop {
  display: flex;
  margin-top: 50px;
}

.loop__container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-child {
    margin-right: 40px;
  }
  &:last-child {
    margin-left: 40px;
  }

  &-title {
    margin-bottom: 30px;

    color: var(--color-white);
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  &-empty {
    width: 160px;
    height: 160px;
    margin: 20px;
    background: var(--color-text-dark);
    border-radius: 50%;
  }
  &-chip {
    margin-bottom: 40px;
    text-transform: uppercase;
  }
}

.loop__game-info {
  display: flex;
  flex-direction: column;
  align-self: center;

  &-status {
    margin-bottom: 14px;

    color: var(--color-white);
    font-size: 2.8rem;
    text-transform: uppercase;
    text-align: center;
  }
  &-button {
    z-index: 1;
  }
}
</style>
