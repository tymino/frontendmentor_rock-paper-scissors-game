<template>
  <div class="rules">
    <div class="rules__content">
      <div class="rules__content-title">rules</div>
      <img
        class="rules__content-close"
        src="/images/icon-close.svg"
        alt="close"
        @click="$emit('hide-rules')"
      />
      <img class="rules__image" :src="setSrcOfIcon" alt="rules" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-rules',
  props: {
    currentGameType: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  computed: {
    setSrcOfIcon() {
      const isBonus = this.currentGameType === 1 ? '-bonus' : '';
      return `/images/image-rules${isBonus}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.rules {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(#000000, 0.4);
  z-index: 10;
}

.rules__content {
  display: grid;
  grid-template-rows: repeat(2, minmax(30px, auto));
  grid-template-columns: repeat(2, auto);
  align-items: center;
  padding: 40px;
  background: var(--color-white);
  border-radius: var(--border-radius);
  margin-bottom: 100px;

  &-title {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    padding-bottom: 20px;
    color: var(--color-text-dark);
    font-size: 2rem;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
  }
  &-close {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    padding-bottom: 20px;
    cursor: pointer;
  }

  &__image {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    width: 350px;
    height: auto;
    padding: 0 20px;
  }
}

@media (max-width: 675px) {
  .rules {
    background: var(--color-white);
  }

  .rules__content {
    grid-template-rows: repeat(3, minmax(30px, auto));
    grid-template-columns: repeat(1, auto);
    align-items: center;
    justify-items: center;

    &-title {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      padding-bottom: 60px;
      color: var(--color-text-dark);
      font-size: 2rem;
      font-weight: var(--font-weight-bold);
      text-transform: uppercase;
    }
    &-close {
      grid-row: 3 / 4;
      grid-column: 1 / 2;
      padding-top: 60px;
      padding-bottom: 0px;
      transform: scale(1.4);
    }

    &__image {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
  }
}
</style>
