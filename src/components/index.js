import Vue from 'vue'
import last from 'lodash/last'
import first from 'lodash/first'

const requireComponent = require.context(
  '../components', // component relativ folder path
  true, // whether to look into subfolders or not
  /[A-Z]\w+\.(vue)/ // regex to get files
)

requireComponent.keys().forEach(path => {
  const component = last(path.split('/'))
  const componentConfig = requireComponent(path)
  const componentName = first(component.split('.'))

  Vue.component(
    `Kuya${componentName}`,
    componentConfig.default || componentConfig
  )
})
