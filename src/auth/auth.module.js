import './style.css';

import LoginComponent from './login.component';
import LogoutComponent from './logout.component';
import _authService from './auth.service';
import LoginController from './login.controller';

LoginController.$inject = ["authService"];

export default angular
  .module("AuthModule", [])
  .component("loginComponent", LoginComponent)
  .component("logoutComponent", LogoutComponent)
  .controller("LoginController", LoginController)
  .factory("authService", _authService);
