import angular from 'angular';
import 'angular-route';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';

import '../../node_modules/angular-material/angular-material.css';

import router from './app.config';
import appController from './app.controller';
import appDirective from './app.directive';

import AuthModule from '../auth/auth.module';
import HomeModule from '../home/home.module';
import AboutModule from '../about/about.module';

//import '../style/app.css';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ["ngRoute", "AuthModule", "HomeModule", "AboutModule"])
  .directive('app', appDirective)
  .controller('AppCtrl', appController)
  .constant('API_ENDPOINT', 'http://localhost:3000')
  .config(router);
  
export default MODULE_NAME;