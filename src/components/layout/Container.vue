<template>
  <div
    class="container"
    :style="styling"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    spacing: {
      type: String,
      default: "5em"
    }
  },
  computed: {
    styling() {
      return {
        margin: `0 ${this.spacing}`
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.container {
  display: block;
}
</style>
