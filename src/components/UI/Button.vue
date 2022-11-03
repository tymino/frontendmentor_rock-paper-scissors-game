<template>
  <button class="button" :class="{ 'button--secondary': isSecondary }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    isSecondary: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 30px;

  background: none;
  border: 2px solid var(--color-header-outline);
  border-radius: var(--border-radius);

  color: var(--color-white);
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;

  transition: border 0.3s ease-in;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--color-white);
  }
}

.button {
  &--secondary {
    color: var(--color-text-dark);
    background: var(--color-white);
    border: 2px solid var(--color-white);
    font-size: 0.9rem;
    font-weight: var(--font-weight-bold);

    transition: color 0.3s ease-in;

    &:hover {
      color: red;
    }
  }
}
</style>
