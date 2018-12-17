<template>
  <div
    class="column"
    :class="classes"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    column: {
      type: String,
      required: false,
      default: 'auto',
    },
  },
  computed: {
    classes() {
      let colProperty = `column-${this.column}`
      
      return {
        [colProperty]: true,
      }
    }
  }
}
</script>
