angular.module('app-bootstrap').controller('SignUpController', [ 'Upload', '$rootScope', '$state',
  function (Upload, $rootScope, $state) {

    this.component2Phrase = 'This event scren';

    // TODO: ADD ID FIELD
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
        "buddyList": [
          "5aa36e9cc191c466989b9323",
          "5aa36c7b8a9618655defbf16",
          "5aa36e485261dc6678d4c5ab"
        ],
    		"birthAge":"11.07.1980",
        "_id": "5aa372106c772d673b08bc5a"
      }

      $state.go('home');
    }

  }
]);
