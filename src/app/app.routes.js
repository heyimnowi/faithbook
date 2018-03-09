angular.module('app-bootstrap').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('home');
    });

    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          main: {
            templateUrl: '../app/components/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
