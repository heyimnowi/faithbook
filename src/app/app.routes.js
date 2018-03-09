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
      })
      .state('event', {
        url: '/event/{eventId}',
        views: {
          main: {
            templateUrl: '../app/components/event/event.html',
            controller: 'EventController',
            controllerAs: 'eventCtrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
