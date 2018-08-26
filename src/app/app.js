import angular from 'angular';
import 'angular-route';

import router from './app.config';
import appController from './app.controller';
import appDirective from './app.directive';

import HomeModule from '../home/home.module';
import AboutModule from '../about/about.module';

import '../style/app.css';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ["ngRoute", "AboutModule"])
  .directive('app', appDirective)
  .controller('AppCtrl', appController)
  .config(router);
  
export default MODULE_NAME;