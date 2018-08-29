_loginController.$inject = ["authService"];

let LoginComponent = {
  template: require("./login.tmpl.html"),
  controller: _loginController
};

function _loginController(authService) {
  this.welcomeText = "Login page!";
  this.greeting = "Webpack Angular Starter";
  this.loginModel = {
    username: "",
    password: ""
  };

  this.sendCredentials = async function() {
    console.log(this.loginModel);
    //Send user credentials to autService
    authService.request(this.loginModel);
  };
}

export default LoginComponent;
