<template>
  <div :class="setClassChip">
    <div class="chip__icon-wrapper">
      <img class="chip__icon" :src="setIconSrcChip" :alt="chipName" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-chip',
  props: {
    chipName: {
      type: String,
      default: 'rock',
      required: true,
    },
  },
  computed: {
    setClassChip() {
      return `chip chip__size--md chip--${this.chipName}`;
    },
    setIconSrcChip() {
      return `/images/icon-${this.chipName}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.chip {
  --shadow-hover: 0px 0px 40px var(--color-header-outline);

  border-radius: 50%;
  transition: 0.3s ease;
  cursor: pointer;

  &__size--md {
    width: 180px;
    height: 180px;
    padding: 20px;
  }

  &--scissors {
    background: var(--color-scissors-gradient);
    box-shadow: 0px 6px 0px var(--color-scissors-shadow);

    &:hover {
      box-shadow: 0px 6px 0px var(--color-scissors-shadow), var(--shadow-hover);
    }
  }
  &--rock {
    background: var(--color-rock-gradient);
    box-shadow: 0px 6px 0px var(--color-rock-shadow);

    &:hover {
      box-shadow: 0px 6px 0px var(--color-rock-shadow), var(--shadow-hover);
    }
  }
  &--paper {
    background: var(--color-paper-gradient);
    box-shadow: 0px 6px 0px var(--color-paper-shadow);

    &:hover {
      box-shadow: 0px 6px 0px var(--color-paper-shadow), var(--shadow-hover);
    }
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
