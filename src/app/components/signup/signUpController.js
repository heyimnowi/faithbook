angular.module('app-bootstrap').controller('SignUpController', [ 'Upload',
  function (Upload) {

    this.component2Phrase = 'This event scren';

    this.submit = () => {
      $rootScope.loggedUser = {
        "name":"Haya Atiyeh",
		"password":"12345",
		"isHost":"false",
		"religion":"Muslim",
		"interests":["cooking", "reading", "painting"],
		"email":"haya.atiyeh@gmail.com",
		"gender":"female",
		"city":"Rome",
		"bio":"I just moved to Rome a month ago and I want to find out more about the culture and religion here.",
		"buddyList":[],
		"birthAge":"11.07.1980"
      }

      $state.go('home');
    }

  }
]);
