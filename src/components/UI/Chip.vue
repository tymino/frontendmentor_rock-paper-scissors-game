<template>
  <div :class="setClassOfChip">
    <div class="chip__icon-wrapper">
      <img
        class="chip__icon"
        draggable="false"
        :src="setSrcOfChipIcon"
        :alt="chipName"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-chip',
  props: {
    chipId: {
      type: Number,
      required: true,
    },
    chipName: {
      type: String,
      default: 'rock',
      required: true,
    },
    chipSize: {
      type: String,
      default: 'dm',
      required: true,
    },
    isDisableHover: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setClassOfChip() {
      return `chip chip__size--${this.chipSize} chip--${this.chipName} ${
        this.isDisableHover ? 'chip__hover-off' : ''
      }`;
    },
    setSrcOfChipIcon() {
      return `/images/icon-${this.chipName}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin shadow($color) {
  box-shadow: 0px 6px 0px var($color);

  &:hover:not(.chip__hover-off) {
    box-shadow: 0px 6px 0px var($color),
      0px 0px 40px var(--color-header-outline);
    cursor: pointer;
  }
}

.chip {
  border-radius: 50%;
  transition: 0.3s ease;

  &__size--ds {
    width: 140px;
    height: 140px;
    padding: 16px;
  }
  &__size--dm {
    width: 180px;
    height: 180px;
    padding: 20px;
  }
  &__size--dl {
    width: 200px;
    height: 200px;
    padding: 20px;
  }

  &--scissors {
    background: var(--color-scissors-gradient);
    @include shadow(--color-scissors-shadow);
  }
  &--rock {
    background: var(--color-rock-gradient);
    @include shadow(--color-rock-shadow);
  }
  &--paper {
    background: var(--color-paper-gradient);
    @include shadow(--color-paper-shadow);
  }
  &--lizard {
    background: var(--color-lizard-gradient);
    @include shadow(--color-lizard-shadow);
  }
  &--spock {
    background: var(--color-spock-gradient);
    @include shadow(--color-spock-shadow);
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
