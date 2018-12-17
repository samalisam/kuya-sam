<template>
  <div
    class="container"
    :class="classes"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isMarginless: {
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
        'is-marginless': this.isMarginless,
        'is-spaced': this.isSpaced,
        'is-fullscreen': this.isFullscreen,
      }
    }
  }
}
</script>
