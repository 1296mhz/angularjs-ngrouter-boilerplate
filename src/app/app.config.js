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
  }

  export default router