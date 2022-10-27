<template>
  <div class="board">
    <img
      :src="`/images/bg-${setGameTypeIconName}.svg`"
      :alt="`bg-${setGameTypeIconName}`"
      draggable="false"
    />
    <Chip
      class="board__chip"
      :class="`board__chip--${setGameTypeIconName}`"
      v-for="(chip, index) in amountGameChips"
      :key="chip"
      :chipId="index"
      :chipName="chip"
      :chipSize="currentGameType ? 'ds' : 'dm'"
      @click="$emit('chip-click', index)"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Chip from '@/components/UI/Chip.vue';

export default {
  name: 'game-board',
  components: {
    Chip,
  },
  computed: {
    ...mapState({
      gameTypeNames: (state) => state.gameTypeNames,
    }),
    ...mapGetters(['currentGameType', 'amountGameChips']),
    setGameTypeIconName() {
      return this.currentGameType
        ? this.gameTypeNames[0]
        : this.gameTypeNames[1];
    },
  },
};
</script>

<style lang="scss" scoped>
.board {
  position: relative;
  margin: 130px;
}

.board__chip {
  position: absolute;
  transform: translate(-50%, -50%);

  &--pentagon {
    &:nth-child(2) {
      top: 2%;
      left: 50%;
    }
    &:nth-child(3) {
      top: 38%;
      left: 2%;
    }
    &:nth-child(4) {
      top: 38%;
      right: -38%;
    }
    &:nth-child(5) {
      left: 20%;
      bottom: -40%;
    }
    &:nth-child(6) {
      right: -20%;
      bottom: -40%;
    }
  }

  &--triangle {
    &:nth-child(2) {
      top: 2%;
      left: 6%;
    }
    &:nth-child(3) {
      top: 2%;
      right: -50%;
    }
    &:nth-child(4) {
      left: 50%;
      bottom: -45%;
    }
  }
}
</style>
