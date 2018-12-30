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
    <div class="timeout-line">
      <div
        ref="timeout"
        class="timeout-element"
      >
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
import anime from 'animejs'

export default {
  name: 'KCarousel',
  props: {
    interval: {
      type: Number,
      default: 3500
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
      timeoutLine: null,
      intervalId: null,
      timeoutId: null
    }
  },
  computed: {
    imageLength() {
      return this.images.length
    }
  },
  mounted() {
    this.gallery = this.$refs.carousel
    this.timeoutLine = this.$refs.timeout

    this.intervalId = setInterval(() => {
      this.scrollNext()
    }, this.interval)

    this.startTimeoutline(this.interval)
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
      let animdur = this.interval

      if(force) {
        clearInterval(this.intervalId)
        if(this.timeoutId) {
          clearTimeout(this.timeoutId)
        }

        this.timeoutId = setTimeout(() => {
          this.intervalId = setInterval(() => {
            this.scrollNext()
          }, this.interval)
        }, this.timeout)

        animdur = this.timeout
      }

      let galleryWidth = this.gallery.clientWidth
      let galleryPosition = galleryWidth * this.galleryIndex

      this.gallery.scrollTo({
        left: galleryPosition,
        behavior: 'smooth'
      })

      this.startTimeoutline(animdur)
    },
    startTimeoutline(dur) {
      let animation = {
        targets: this.timeoutLine,
        width: ['0%', '100%'],
        easing: 'linear',
        duration: dur
      }

      anime(animation)
    }
  }
}
</script>
