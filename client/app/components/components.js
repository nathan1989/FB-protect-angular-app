import angular from 'angular'
import Home from './home/home'
import SecondTier from './secondTier/secondTier'
import ThirdTier from './thirdTier/thirdTier'

const componentModule = angular.module('app.components', [
  Home,
  SecondTier,
  ThirdTier
])
.name

export default componentModule
