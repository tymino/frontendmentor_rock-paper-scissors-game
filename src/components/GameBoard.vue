<template>
  <div class="board">
    <img
      :src="`/images/bg-${setNameOfTheCurrentGameType}.svg`"
      :alt="`bg-${setNameOfTheCurrentGameType}`"
      draggable="false"
    />
    <Chip
      class="board__chip"
      :class="`board__chip--${setNameOfTheCurrentGameType}`"
      v-for="(chip, index) in amountGameChips"
      :key="chip"
      :chipId="index"
      :chipName="chip"
      :chipSize="currentGameType ? 'ds' : 'dm'"
      @click="handleClickOfChip(index)"
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
  methods: {
    handleClickOfChip(chipIndex) {
      this.$store.dispatch('startCounter', { chipIndex });
    },
  },
  computed: {
    ...mapState({
      currentGameType: (state) => state.currentGameType,
      namesOfGameTypes: (state) => state.namesOfGameTypes,
    }),
    ...mapGetters(['amountGameChips']),
    setNameOfTheCurrentGameType() {
      return this.currentGameType
        ? this.namesOfGameTypes[0]
        : this.namesOfGameTypes[1];
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
