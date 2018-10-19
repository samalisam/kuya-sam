<template>
  <div class="mainview">
    <transition :name="transitionName" mode="out-in">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'theMainView',
  computed: {
    ...mapGetters({
      lastRouteMetaIndexes: 'getLastRouteMetaIndexes' 
    }),
    transitionName() {
      let transition = '';

      let toRight = 'slide-to-right';
      let toLeft = 'slide-to-left';

      if(this.lastRouteMetaIndexes.from < this.lastRouteMetaIndexes.to) {
        transition = toRight;
      } else {
        transition = toLeft;
      }

      if(this.lastRouteMetaIndexes.from == this.lastRouteMetaIndexes.to) {
        transition = 'fade';
      }

      return transition;
    }
  }
}
</script>

<style lang="scss" scoped>
.mainview {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

@mixin transitionValues() {
  transition-timing-function: ease-out;
  transition-property: opacity, transform;
  transition-duration: 0.5s;
}

.fade-enter {
  opacity: 0;
}
.slide-to-right-enter,
.slide-to-left-leave-to {
  opacity: 0;
  transform: translateX(-5vw);
}
.slide-to-right-enter-active,
.slide-to-right-leave-active,
.slide-to-left-enter-active,
.slide-to-left-leave-active,
.fade-enter-active,
.fade-leave-active {
  @include transitionValues();
}
.fade-leave-to {
  opacity: 0;
}
.slide-to-right-leave-to,
.slide-to-left-enter {
  opacity: 0;
  transform: translateX(5vw);
}
</style>
