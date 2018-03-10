angular.module('app-bootstrap').factory('userService', [
  '$http',
  function ($http) {

    return {
      // Get the metadata for an artist. Includes biography
      getProfileInfo: (profileId) => {
        return $http.post('http://localhost:9000/profileInfo', { userId: profileId });
      },
      getUsers: (city, religion) => {
        const requestInfo = {
          city: city === undefined? '' : city,
          religion: religion === undefined? '' : religion,
        };
        return $http.post('http://localhost:9000/filter', requestInfo );
      },
      requestUser: (from, to) => {
        const requestInfo = {
          from,
          to,
        };
        return $http.post('http://localhost:9000/requestUser', requestInfo );
      },
    };

  }]);
