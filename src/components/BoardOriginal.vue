<template>
  <div class="board">
    <img src="../assets/bg-triangle.svg" alt="bg-triangle" />
    <Chip
      class="board__chip"
      v-for="chip in $store.getters.amountGameChips"
      :key="chip"
      :chipName="chip"
    />
  </div>
</template>

<script>
import Chip from '@/components/UI/Chip.vue';

export default {
  name: 'board-original',
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

  &:nth-child(2) {
    top: -25%;
    left: -20%;
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
