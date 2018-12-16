<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {},
  computed: {
    classes() {
      return {
        'column': true,
      }
    }
  }
}
</script>
