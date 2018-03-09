angular.module('app-bootstrap').controller('ProfileController', [ '$state', '$rootScope',
  function ($state, $rootScope) {

    $rootScope.stateName = $state.current.name;

  }
]);
