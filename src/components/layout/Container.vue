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
    isVerticallySpaced: {
      type: Boolean,
      default: false,
    },
    isHorizontallySpaced: {
      type: Boolean,
      default: true,
    },
    isFullscreen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'is-vertically-spaced': this.isVerticallySpaced,
        'is-horizontally-spaced': this.isHorizontallySpaced,
        'is-fullscreen': this.isFullscreen,
      }
    }
  }
}
</script>
