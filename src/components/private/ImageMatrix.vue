<template>
 <div class="image-matrix">
   <div class="blocka" v-for="(item, index) in 48" :key="index" :style="{
        backgroundColor: getColor(),
        gridColumnSpan: getNumber(1, 4),
        gridRowSpan: getNumber(1, 4)
      }">{{index}}</div>
 </div>  
</template>

<script>
export default {
  name: 'ImageMatrix',
  props: {
    data: {}
  },
  data() {
    return {};
  },
  methods: {
    getColor() {
      return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    },
    getNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};
</script>

<style lang="scss" scoped>
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

.image-matrix {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.blocka {
  width: 100%;
  height: 100px;
  transform: skewY(-30deg);
  &:nth-child(2) {
    transform: skewY(30deg);
  }
  &:nth-child(4) {
    transform: skewY(-30deg);
  }
  &:nth-child(6) {
    transform: skewY(30deg);
  }
}
</style>
