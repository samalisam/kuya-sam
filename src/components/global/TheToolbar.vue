<template>
  <nav class="navbar has-shadow" role="navigation">
    <div class="container is-fluid">
      <div class="navbar-brand">
        <a class="navbar-item" @click="goTo('home')">KUYA</a>
        <a role="button" class="navbar-burger" aria-label="menu" :aria-expanded="isExpanded" @click="isExpanded = !isExpanded" :class="{'is-active': isExpanded}">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{'is-active': isExpanded}">
        <div class="navbar-end">
          <a class="navbar-item" :class="{'is-active': currentRoute == 'projects'}" @click="goTo('projects')">Projects</a>
          <a class="navbar-item" :class="{'is-active': currentRoute == 'galleries'}" @click="goTo('galleries')">Galleries</a>
          <a class="navbar-item" :class="{'is-active': currentRoute == 'aboutMe'}" @click="goTo('aboutMe')">About me</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'toolbar',
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    goTo(routeName) {
      this.isExpanded = this.isExpanded ? false : this.isExpanded;
      this.$router.push({name: routeName});
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }
}
</script>
