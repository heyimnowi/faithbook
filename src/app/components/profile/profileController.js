angular.module('app-bootstrap').controller('ProfileController', [ '$state', '$rootScope', 'userService', '$scope', '$stateParams',
  function ($state, $rootScope, userService, $scope, $stateParams) {

    userService.getProfileInfo($stateParams.profileId).then((response) => {
      this.user = response.data;
    });


    $rootScope.stateName = $state.current.name;

    this.requestSent = false;

    this.sendRequest = () => {
      userService.makeCall('4252692128');
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
