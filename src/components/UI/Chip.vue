<template>
  <div :class="setClassOfChip">
    <transition name="appear">
      <div class="chip__winner-aura" v-if="isHasWinAura">
        <div class="chip__winner-aura-wave"></div>
        <div class="chip__winner-aura-wave"></div>
      </div>
    </transition>

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
      default: 'sm',
      required: true,
    },
    isDisableHover: {
      type: Boolean,
      default: false,
    },
    isHasWinAura: {
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
  position: relative;
  border-radius: 50%;
  transition: 0.3s ease;

  &__size--sm {
    width: 140px;
    height: 140px;
    padding: 16px;
  }
  &__size--md {
    width: 180px;
    height: 180px;
    padding: 20px;
  }
  &__size--lg {
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

.chip__winner-aura {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250%;
  height: 250%;
  padding: 40px;
  background: var(--color-white);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    closest-side,
    var(--color-white) 60%,
    var(--color-header-outline) 60%,
    var(--color-white) 80%,
    var(--color-header-outline) 80%,
    var(--color-white) 100%
  );
  opacity: 0.1;
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

.appear {
  &-enter-active {
    transition: all 0.4s ease-in;
  }
  &-enter-from {
    opacity: 0;
  }
}

@media (max-width: 675px) {
  .chip {
    &__size--sm {
      width: 140px;
      height: 140px;
      padding: 16px;
    }
    &__size--md {
      width: 120px;
      height: 120px;
      padding: 14px;
    }
    &__size--lg {
      width: 200px;
      height: 200px;
      padding: 20px;
    }
  }
}
</style>
