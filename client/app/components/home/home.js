import angular from 'angular'
import iRouter from 'angular-ui-router'
import template from './home.html'
import controller from './home.controller'

const homeModule = angular.module('home', [
  iRouter,
])
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject'

  // redirect non-existing URLs to homepage
  $urlRouterProvider.otherwise('/')

  // setup homepage route
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    })
})
.filter('spanSplit', ($sce) => {
  return (input) => {
    // filter to split the string with each character wrapped in a <span>
    let text = input.split('')
    let len = text.length
    let result = []

    // loop through characters, add <span>
    for(let i = 0; i < len; i++){
      result[i] = '<span class="arc-text-' + i + '">' + text[i] + '</span>'
    }

    // return result, as HTML
    return $sce.trustAsHtml(result.join(''))
  }
})
.component('home', {
  template,
  controller
}).name

export default homeModule
