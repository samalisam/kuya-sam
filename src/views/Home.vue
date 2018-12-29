<template>
  <div class="home">
    <KContainer>
      <div class="container-content">
        <div class="inner-content">
          <h1>I shoot photos.</h1>
          <p>But wait, that's not all.</p>
          <KButton>Check out the full gallery</KButton>
        </div>
      </div>
      <KCarousel :images="photoImages"></KCarousel>
    </KContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photoImages: [
        'Cool Blues.png',
        'JShine.jpg',
        'MegaTron.jpg',
        'Moonlit Asteroid.png',
        'Piggy Pink.jpg'
      ]
    }
  }
}
</script>
