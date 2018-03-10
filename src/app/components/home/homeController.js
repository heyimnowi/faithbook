angular.module('app-bootstrap').controller('HomeController', [ 'userService',
  function (userService) {

    userService.getUsers().then((response) => {
      this.users = response.data;
    });

  }
]);
