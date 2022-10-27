<template>
  <div class="board">
    <img src="../assets/bg-triangle.svg" alt="bg-triangle" />
    <Chip
      class="board__chip"
      v-for="chip in $store.getters.amountGameChips"
      :key="chip"
      :chipName="chip"
      chipSize="dm"
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
  margin: 140px;
}

.board__chip {
  position: absolute;
  transform: translate(-50%, -50%);

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
</style>
