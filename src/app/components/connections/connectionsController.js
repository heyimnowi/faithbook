angular.module('app-bootstrap').controller('ConnectionsController', [ '$rootScope', 'userService',
  function ($rootScope, userService) {

    userService.getProfileInfo($rootScope.loggedUser["_id"]).then((response) => {
      this.users = response.data.buddyList;
    });

  }
]);
