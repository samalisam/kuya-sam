<template>
  <div class="image-slider">
    <div class="slider-item">
      <img class="slider-item-image" src="../../assets/vertical-01.jpg" />
    </div>
    <div class="slider-item">
      <img class="slider-item-image" src="../../assets/horizontal-01.jpg" />
    </div>
    <div class="slider-item">
      <img class="slider-item-image" src="../../assets/vertical-01.jpg" />
    </div>
    <div class="slider-item">
      <img class="slider-item-image" src="../../assets/horizontal-01.jpg" />
    </div>
    <div class="slider-item">
      <img class="slider-item-image" src="../../assets/vertical-01.jpg" />
    </div>
    <div class="slider-item">
      <img class="slider-item-image" src="../../assets/horizontal-01.jpg" />
    </div>
    <div class="slider-item">
      <img class="slider-item-image" src="../../assets/vertical-01.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'imageSlider'
};
</script>

<style lang="scss">
$gap: 64px !default;
$tablet: 769px !default;

@mixin mobile {
  @media screen and (max-width: $tablet - 1px) {
    @content;
  }
}

@mixin tablet {
  @media screen and (min-width: $tablet), print {
    @content;
  }
}

.image-slider {
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: auto;

  @include mobile {
    .slider-item {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  @include tablet {
    .slider-item {
      padding-left: $gap;
      padding-right: $gap;
    }
  }

  .slider-item {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    height: 80vh;

    & > img.slider-item-image {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }
}
</style>
