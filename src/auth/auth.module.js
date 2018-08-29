import angular from "angular";
import './style.css';

import LoginComponent from './login.component';
import LogoutComponent from './logout.component';
import _authService from '../../services/auth.service';

export default angular
  .module("AuthModule", [])
  .component("loginComponent", LoginComponent)
  .component("logoutComponent", LogoutComponent)
  .factory("authService", _authService);;
