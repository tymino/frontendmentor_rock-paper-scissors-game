<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
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

  transition: 0.3s ease-in;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--color-white);
  }
}
</style>
