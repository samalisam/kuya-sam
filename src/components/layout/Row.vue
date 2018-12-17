<template>
  <div
    class="row"
    :class="classes"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'is-mobile': this.isMobile
      }
    }
  }
}
</script>
