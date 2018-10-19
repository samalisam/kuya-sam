<template>
  <div class="home">
    <div class="container is-fluid add-spacing">
      <h1 class="title is-1">I do photos</h1>
      <h3 class="title is-3">and such stuff.</h3>
      <ImageSlider></ImageSlider>
    </div>
  </div>
</template>

<script>
import ImageSlider from '@/components/private/ImageSlider.vue';

export default {
  name: 'home',
  components: {
    ImageSlider
  }
};
</script>
