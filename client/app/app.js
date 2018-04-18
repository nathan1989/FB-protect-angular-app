import angular from 'angular'
import uiRouter from 'angular-ui-router'
import Components from './components/components'
import template from './app.html'
import './app.scss'

angular.module('app', [
  uiRouter,
  Components,
])
.config(($locationProvider, $sceProvider) => {
  'ngInject'

  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
  // #how-to-configure-your-server-to-work-with-html5mode
  $locationProvider.html5Mode(true).hashPrefix('!')

  // disable Strict Contextual Escaping
  $sceProvider.enabled(false)
})
.run(($transitions, $rootScope, language, $state, $window) => {
  $transitions.onStart({}, (transition) => {
    document.body.scrollTop = document.documentElement.scrollTop = 0 // scroll to top on state change
    $rootScope.containerClass = transition.$to().component // add current page class to container
  })

  $rootScope.currentLang = language.getLabel()
  $rootScope.langBox = false

  $rootScope.changeLang = (lang, label = lang) => {
    $rootScope.currentLang = label
    language.set(lang)
    language.setLabel(label)
    $state.reload()
    $rootScope.langBox = false
  }
})
.component('app', {
  template
})
.service('language', () => {
  let setLang = (lang) => {
    return window.localStorage.setItem('lang', lang)
  }

  let getLang = () => {
      return (window.localStorage.getItem('lang') === null) ? 
        'english' : 
        window.localStorage.getItem('lang')
  }

  let setLabel = (label) => {
    return window.localStorage.setItem('langLabel', label)
  }

  let getLabel = () => {
      return (window.localStorage.getItem('langLabel') === null) ? 
        'english' : 
        window.localStorage.getItem('langLabel')
  }

  return {
    set: setLang,
    setLabel: setLabel,
    get: getLang,
    getLabel: getLabel
  }
})
.service('childInherit', () => {
  // this service passes parent (second tier pages) data to their child (third tier) pages
  let list = []

  let addParent = (parent) => {
    list = []
    list.push(parent)
  }

  let getParent = () => {
    return list
  }

  return {
    addParent: addParent,
    getParent: getParent
  }
})
.directive('dynamicHeight', ($window, $timeout, $transitions) => {
  return {
    link: (scope, el, attrs) => {
      const setHeight = () => {
        el.css('height', null)
        $timeout(() => {
          el.css('height', document.querySelector('html').scrollHeight + 'px')
        })
      }

      $transitions.onStart({}, () => {
        setHeight()
      })

      angular.element($window).on('resize', setHeight)

      const cleanUp = () => {
        angular.element($window).off('resize', setHeight)
      }

      scope.$on('$destroy', cleanUp)
    }
  }
})
