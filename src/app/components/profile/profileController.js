angular.module('app-bootstrap').controller('ProfileController', [ '$state', '$rootScope', 'userService', '$scope',
  function ($state, $rootScope, userService, $scope) {

    userService.getProfileInfo();

    $rootScope.stateName = $state.current.name;

    this.requestSent = false;

    this.sendRequest = () => {
      this.requestSent = true;
    }

    this.slickConfig = {
      enabled: true,
      autoplay: true,
      draggable: false,
      autoplaySpeed: 1000
    };

  }
]);
