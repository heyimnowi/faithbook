angular.module('app-bootstrap').controller('LoginController', [ '$state', '$rootScope',
  function ($state, $rootScope) {

    $rootScope.stateName = $state.current.name;

  }
]);
