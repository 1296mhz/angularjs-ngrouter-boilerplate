import angular from 'angular';
import homeController from './home.controller';

import './home.css';

const MODULE_NAME = 'HomeModule';

angular.module(MODULE_NAME, [])
  .controller('HomeCtrl', homeController);

export default MODULE_NAME;