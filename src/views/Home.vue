<template>
  <div class="home">
    <div class="container is-fluid add-spacing">
      <h1 class="title is-1">I do photos</h1>
      <h3 class="title is-3">and such stuff.</h3>
    </div>
    <ImageMatrix></ImageMatrix>
    <div class="container is-fluid">
    </div>
  </div>
</template>

<script>
import ImageMatrix from '@/components/private/ImageMatrix.vue';

export default {
  name: 'home',
  components: {
    ImageMatrix
  }
};
</script>