<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'c-button',
};
</script>

<style lang="scss" scoped>
.button {
  border: 1px solid black;
}
</style>
