<template>
  <div class="gallery">
    <div
      ref="carousel"
      class="carousel"
    >
      <div
        v-for="(img, index) in images"
        :key="index"
        class="gallery-img"
      >
        <div class="img-placeholder">
          <img :src="getImagePath(img)">
        </div>
      </div>
    </div>
    <div class="carousel-indexer">
      <div
        v-for="(num, index) in imageLength"
        :key="index"
        :class="{active: index == galleryIndex}"
        class="index-element"
        @click="forceScroll(index)"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KCarousel',
  props: {
    interval: {
      type: Number,
      default: 2000
    },
    timeout: {
      type: Number,
      default: 10000
    },
    imageBasePath: {
      type: String,
      default: '/assets/'
    },
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      galleryIndex: 0,
      gallery: null,
      intervalId: null
    }
  },
  computed: {
    imageLength() {
      return this.images.length
    }
  },
  mounted() {
    this.gallery = this.$refs.carousel
    console.log(this.gallery);
    

    this.intervalId = setInterval(() => {
      this.scrollNext()
    }, this.interval);
  },
  methods: {
    getImagePath(name) {
      let path = this.imageBasePath + name
      return path
    },
    scrollNext() {
      if(this.gallery) {
        if(this.galleryIndex >= this.imageLength - 1) {
          this.galleryIndex = 0
        } else {
          this.galleryIndex++
        }

        this.scrollToIndex()
      }
    },
    forceScroll(index) {
      this.galleryIndex = index
      this.scrollToIndex(true)
    },
    scrollToIndex(force) {
      if(force) {
        clearInterval(this.intervalId)
        setTimeout(() => {
          this.intervalId = setInterval(() => {
            this.scrollNext()
          }, this.interval);
        }, this.timeout);
      }

      let galleryWidth = this.gallery.clientWidth
      let galleryPosition = galleryWidth * this.galleryIndex

      this.gallery.scrollTo({
        left: galleryPosition,
        behavior: 'smooth'
      })
    }
  }
}
</script>
