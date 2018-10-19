<template>
  <div class="image-slider">
    <div class="slider-container">
      <div class="slider-item">1</div>
      <div class="slider-item">2</div>
      <div class="slider-item">3</div>
      <div class="slider-item">4</div>
      <div class="slider-item">5</div>
      <div class="slider-item">6</div>
      <div class="slider-item">7</div>
      <div class="slider-item">8</div>
      <div class="slider-item">9</div>
      <div class="slider-item">10</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'imageSlider'
};
</script>

<style lang="scss" scoped>
.image-slider {
}

.slider-container {
}

.slider-item {
  height: 200px;
  border: 1px solid black;
  background-color: aquamarine;
}
</style>
