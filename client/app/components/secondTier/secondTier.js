import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './secondTier.html';
import controller from './secondTier.controller';
import fbData from '../../data/data';

const secondTierModule = angular.module('secondTier', [uiRouter])
  .config(($stateProvider) => {
    'ngInject'
    // get the data with the chosen language
    let theData = fbData.english.english[0]

    // construct the second tier page routes from the JSON data
    theData.pages.forEach(function(page) {
      // second tier pages
      $stateProvider.state(page.pageComponent, {
        url: page.pageUrl,
        component: 'secondTier',
        containerClass: 'second-page-active',
        onEnter: function() {
          setTimeout(function() {
            document.querySelector("#second-tier-container > *").classList.add("slide-in-t2");
            document.querySelector("home").classList.add("active");
          }, 0);
        }
      })
    })
  })
  .component('secondTier', {
    template,
    controller
  }).name

export default secondTierModule
