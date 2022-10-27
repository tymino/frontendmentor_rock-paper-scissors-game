<template>
  <div class="chip chip__size--md chip--scissors">
    <div class="chip__icon-wrapper">
      <img
        class="chip__icon"
        src="../../assets/images/icon-scissors.svg"
        alt="paper"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-chip',
};
</script>

<style lang="scss" scoped>
.chip {
  border-radius: 50%;

  &__size--md {
    width: 180px;
    height: 180px;
    padding: 20px;
  }

  &--scissors {
    background: var(--color-scissors-gradient);
    box-shadow: 0px 6px 0px var(--color-scissors-shadow);
  }
}

.chip__icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 28%;
  background: white;
  border-radius: 50%;
  box-shadow: 0px 4px 0px inset var(--color-header-outline);
}

.chip__icon {
  width: 100%;
  height: auto;
}
</style>
