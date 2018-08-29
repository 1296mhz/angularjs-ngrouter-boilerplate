function router($routeProvider) {
   $routeProvider.when('/',
      {
         template: require('../home/home.tmpl.html'),
         controller: 'HomeCtrl'
      });
   $routeProvider.when('/about',
      {
         template: require('../about/about.tmpl.html'),
         controller: 'AboutCtrl'
      });
   $routeProvider.when('/login',
      {
         template: require('../auth/login.tmpl.html'),
         controller: 'LoginController'
      });
}

export default router