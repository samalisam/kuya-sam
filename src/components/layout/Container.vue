<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isBorderless: {
      type: Boolean,
      default: false,
    },
    isSpaced: {
      type: Boolean,
      default: false,
    },
    isFullscreen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'container': true,
        'is-borderless': this.isBorderless,
        'is-spaced': this.isSpaced,
        'is-fullscreen': this.isFullscreen,
      }
    }
  }
}
</script>
