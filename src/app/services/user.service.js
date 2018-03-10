angular.module('app-bootstrap').factory('userService', [
  '$http',
  function ($http) {

    return {
      // Get the metadata for an artist. Includes biography
      getProfileInfo: (user) => {
        return $http.post('http://localhost:9000/profileInfo', { userId: 1 });
      },
      getUsers: (city, religion) => {
        const requestInfo = {
          city: city === undefined? '' : city,
          religion: religion === undefined? '' : religion,
        };
        return $http.post('http://localhost:9000/profileInfo', { userId: 1 });
      }
    };

  }]);
