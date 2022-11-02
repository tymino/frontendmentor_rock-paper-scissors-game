<template>
  <div class="loop">
    <div class="loop__chip-wrapper--left">
      <Chip
        class="loop__chip"
        :chipId="getChipsDataInGameLoop.id"
        :chipName="getChipsDataInGameLoop.name"
        chipSize="dl"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Chip from '@/components/UI/Chip.vue';

export default {
  name: 'game-loop',
  components: {
    Chip,
  },
  computed: {
    ...mapState({
      dataOfGameLoop: (state) => state.dataOfGameLoop,
    }),
    ...mapGetters(['amountGameChips', 'getChipsDataInGameLoop']),
  },
};
</script>

<style lang="scss" scoped></style>
