import angular from 'angular'
import uiRouter from 'angular-ui-router'
import template from './<%= name %>.html'
import controller from './<%= name %>.controller'
import './<%= name %>.scss'

const <%= name %>Module = angular.module('<%= name %>', [
  uiRouter,
])
.config(($stateProvider) => {
  'ngInject'

  $stateProvider
    .state('<%= name %>', {
      url: '/<%= name %>',
      component: '<%= name %>',
    })
})
.component('<%= name %>', {
  template,
  controller
}).name

export default <%= name %>Module
