<template>
  <div class="board">
    <img src="../assets/bg-pentagon.svg" alt="bg-triangle" />
    <Chip
      class="board__chip"
      v-for="(chip, index) in $store.getters.amountGameChips"
      :key="chip"
      :chipName="chip"
      :chipId="index"
      chipSize="ds"
      @click="$emit('chip-click', index)"
    />
  </div>
</template>

<script>
import Chip from '@/components/UI/Chip.vue';

export default {
  name: 'board-bonus',
  components: {
    Chip,
  },
};
</script>

<style lang="scss" scoped>
.board {
  position: relative;
  margin: 120px;
}

.board__chip {
  position: absolute;
  transform: translate(-50%, -50%);

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
</style>
