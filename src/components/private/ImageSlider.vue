<template>
  <div class="image-slider">
    <div class="slider-container">
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
  </div>
</template>

<script>
export default {
  name: 'imageSlider'
};
</script>

<style lang="scss" scoped>
.image-slider {
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: red;
}

.slider-container {
  position: absolute;
  display: flex;
  height: 100%;

  .slider-item {
    position: relative;
    display: flex;
    justify-content: center;
    width: 60vw;
    border: 1px solid black;

    & > img.slider-item-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
}
</style>
