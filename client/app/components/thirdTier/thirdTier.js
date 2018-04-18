import angular from 'angular'
import uiRouter from 'angular-ui-router'
import 'ngtap'
import template from './thirdTier.html' 
import controller from './thirdTier.controller'
import fbData from '../../data/data';
import engData from '../../data/data';
import cfrData from '../../data/data-cfr';
import chsData from '../../data/data-chs';
import chtData from '../../data/data-cht';
import finData from '../../data/data-fin';
import spaData from '../../data/data-spa';
import freData from '../../data/data-fre';
import gerData from '../../data/data-ger';

const thirdTierModule = angular.module('thirdTier', [
    uiRouter,
    'ngTap'
  ])
  .config(($stateProvider) => {
    'ngInject'
    // get the data with the chosen language
    let theData = fbData.english.english[0]

    theData.pages.forEach(function(page) {

      // third tier pages
      page.navLinks.forEach(function(link) {
        if (link.pageComponent !== undefined) {
          $stateProvider.state(link.pageComponent, {
            url: link.pageUrl,
            component: 'thirdTier',
            onEnter: function() {
              setTimeout(function() {
                document.querySelector("#third-tier-container > *").classList.add("slide-in-t3");
              }, 0);
              setTimeout(function() {
                document.querySelector("second-tier").classList.add("active");
              }, 400);
            }
          })
        }
      })

    })
  })
  .component('thirdTier', {
    template,
    controller,
  }).name

export default thirdTierModule
