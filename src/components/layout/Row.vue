<template>
  <div
    class="row"
    :style="styling"
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
    styling() {
      return {
        'flex-direction': this.isMobile ? 'column' : 'row'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
