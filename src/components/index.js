import Vue from 'vue'

const requireComponent = require.context(
  '../components', // component relativ folder path
  true, // whether to look into subfolders or not
  /[A-Z]\w+\.(vue)/ // regex to get files
)

requireComponent.keys().forEach(path => {
  const componentConfig = requireComponent(path)

  Vue.component(
    componentConfig.default.name,
    componentConfig.default || componentConfig
  )
})
