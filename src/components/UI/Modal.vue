<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__header">
        <div class="modal__header-title">rules</div>
        <img
          class="modal__header-close"
          src="/images/icon-close.svg"
          alt="close"
          @click="$emit('hide-modal')"
        />
      </div>
      <img class="modal__rules" :src="setSrcOfIcon" alt="rules" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-modal',
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
.modal {
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

  &__content {
    padding: 40px;
    background: var(--color-white);
    border-radius: var(--border-radius);
    margin-bottom: 100px;
  }

  &__rules {
    width: 350px;
    height: auto;
    padding: 0 20px;
  }
}
.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  &-title {
    color: var(--color-text-dark);
    font-size: 2rem;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
  }
  &-close {
    cursor: pointer;
  }
}
</style>
