import angular from 'angular';
import aboutController from './about.controller';

import './about.css';

const MODULE_NAME = 'AboutModule';

angular.module(MODULE_NAME, [])
  .controller('AboutCtrl', aboutController);

export default MODULE_NAME;