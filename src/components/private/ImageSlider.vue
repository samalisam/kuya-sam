<template>
  <div class="image-slider">
    <div class="slider-item">
      <img class="slider-item-image" src="../../assets/vertical-01.jpg" />
    </div>
    <div class="slider-item">
      <img class="slider-item-image" src="../../assets/horizontal-01.jpg" />
    </div>
    <div class="slider-item">
      <img class="slider-item-image" src="../../assets/horizontal-01.jpg" />
    </div>
    <div class="slider-item">
      <img class="slider-item-image" src="../../assets/horizontal-01.jpg" />
    </div>
    <div class="slider-item">
      <img class="slider-item-image" src="../../assets/horizontal-01.jpg" />
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
  width: 100%;
  height: 100%;
  display: flex;

  .slider-item {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    height: 80vh;
    padding-right: 25%;

    & > img.slider-item-image {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }
}
</style>
