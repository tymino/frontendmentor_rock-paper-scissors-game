<template>
  <div class="board">
    <img src="../assets/bg-pentagon.svg" alt="bg-triangle" />
    <Chip
      class="board__chip"
      v-for="chip in $store.getters.amountGameChips"
      :key="chip"
      :chipName="chip"
      chipSize="ds"
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
  border: 1px solid orange;
}

.board__chip {
  position: absolute;

  &:nth-child(2) {
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:nth-child(3) {
    top: -25%;
    right: -20%;
  }
  &:nth-child(4) {
    bottom: -20%;
    left: 20%;
  }
}
</style>
