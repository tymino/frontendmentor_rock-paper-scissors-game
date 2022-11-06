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
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(1, auto);
  margin-top: 50px;
}

.loop__container {
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-child {
    grid-column: 1 / 2;
    margin-right: 40px;
  }
  &:last-child {
    grid-column: 3 / 4;
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
  grid-column: 2 / 3;
  grid-row: 1 / 2;
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

@media (max-width: 675px) {
  .loop {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    margin-top: 40px;
  }

  .loop__container {
    grid-row: 1 / 2;
    flex-direction: column-reverse;

    &:first-child {
      grid-column: 1 / 2;
      margin-right: 22px;
    }
    &:last-child {
      grid-column: 2 / 3;
      margin-left: 22px;
    }

    &-title {
      margin-bottom: 0px;
      font-size: 1rem;
    }
    &-empty {
      width: 110px;
      height: 110px;
      margin: 10px 10px 40px 10px;
    }
    &-chip {
      margin-bottom: 30px;
    }
  }

  .loop__game-info {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    align-items: center;
    margin-top: 30px;
  }
}
</style>
