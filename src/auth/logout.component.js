_logoutController.$inject = ["authService"];

let LogoutComponent = {
  template: require("./logout.tmpl.html"),
  controller: _logoutController
};

function _logoutController(authService) {
  authService.logout();
  this.welcomeText = "Logout page!";
  this.greeting = "Webpack Angular Starter";
}

export default LogoutComponent;
