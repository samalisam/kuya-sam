<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isVertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'row': true,
        'is-vertical': this.isVertical
      }
    }
  }
}
</script>
