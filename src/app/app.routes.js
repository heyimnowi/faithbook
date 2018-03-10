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
      .state('profile', {
        url: '/profile/{profileId}',
        views: {
          main: {
            templateUrl: '../app/components/profile/profile.html',
            controller: 'ProfileController',
            controllerAs: 'profileCtrl'
          }
        }
      })
      .state('signup', {
        url: '/signup',
        views: {
          main: {
            templateUrl: '../app/components/signup/signup.html',
            controller: 'SignUpController',
            controllerAs: 'signUpCtrl'
          }
        }
      })
      .state('connections', {
        url: '/connections',
        views: {
          main: {
            templateUrl: '../app/components/connections/connections.html',
            controller: 'ConnectionsController',
            controllerAs: 'connectionsCtrl'
          }
        }
      })
      .state('me', {
        url: '/me',
        views: {
          main: {
            templateUrl: '../app/components/me/me.html',
            controller: 'ProfileController',
            controllerAs: 'profileCtrl'
          }
        }
      })
      .state('login', {
        url: '/login',
        views: {
          main: {
            templateUrl: '../app/components/login/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
