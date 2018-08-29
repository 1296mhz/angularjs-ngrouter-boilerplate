class LoginController {
   constructor(authService) {
     this.url = 'https://github.com/1296mhz/angularjs-ngrouter-boilerplate';
     this.welcomeText = "Login page!";
     this.greeting = "Webpack Angular Starter";
     this.loginModel = {
       username: "",
       password: ""
     };
   }

   sendCredentials() {
      console.log(this.loginModel);
      //Send user credentials to autService
      authService.request(this.loginModel);
    };
 }
 
 export default LoginController;