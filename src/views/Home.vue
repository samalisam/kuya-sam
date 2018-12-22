<template>
  <div class="home">
    <KContainer>
      <div class="content">
        <div class="inner-content">
          <h1>I shoot photos.</h1>
          <p>But wait, that's not all.</p>
          <KButton>Check out the full gallery</KButton>
        </div>
      </div>
      <div class="gallery">
        <div
          ref="innerGallery"
          class="inner-gallery"
        >
          <div class="gallery-img">
            <div class="img-placeholder">
              <img src="../assets/Cool Blues.png">
            </div>
          </div>
          <div class="gallery-img">
            <div class="img-placeholder">
              <img src="../assets/JShine.jpg">
            </div>
          </div>
          <div class="gallery-img">
            <div class="img-placeholder">
              <img src="../assets/MegaTron.jpg">
            </div>
          </div>
          <div class="gallery-img">
            <div class="img-placeholder">
              <img src="../assets/Moonlit Asteroid.png">
            </div>
          </div>
          <div class="gallery-img">
            <div class="img-placeholder">
              <img src="../assets/Piggy Pink.jpg">
            </div>
          </div>
        </div>
        <div class="gallery-indexer">
          <div class="index-element"></div>
          <div class="index-element"></div>
          <div class="index-element"></div>
          <div class="index-element"></div>
          <div class="index-element"></div>
        </div>
      </div>
    </KContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryIndex: 0,
      gallery: null
    }
  },
  mounted() {
    this.gallery = this.$refs.innerGallery
    let interval = 6000
    setInterval(() => {
      if(this.gallery != null) {
        let imagesInGallery = 4

        if(this.galleryIndex >= imagesInGallery) {
          this.galleryIndex = 0
        } else {
          this.galleryIndex++
        }

        this.scroll(this.galleryIndex)
      }
    }, interval);
  },
  methods: {
    scroll(imageIndex) {
      let galleryWidth = this.gallery.clientWidth
      let galleryPosition = galleryWidth * imageIndex

      this.gallery.scrollTo({
        left: galleryPosition,
        behavior: 'smooth'
      })
    }
  }
}
</script>
