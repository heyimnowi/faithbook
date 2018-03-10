angular.module('app-bootstrap').controller('SignUpController', [ 'Upload', '$rootScope', '$state',
  function (Upload, $rootScope, $state) {

    this.component2Phrase = 'This event scren';

    this.submit = () => {
      $rootScope.loggedUser = {
        // TODO: json logged user
      }

      $state.go('home');
    }

  }
]);
