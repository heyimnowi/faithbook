angular.module('app-bootstrap').controller('ProfileController', [ '$state', '$rootScope', 'userService',
  function ($state, $rootScope, userService) {

    debugger;
    userService.getProfileInfo();

    $rootScope.stateName = $state.current.name;

    this.testimonials = [{
      photo: 'https://avatars1.githubusercontent.com/u/7938095?s=460&v=4',
      name: 'Noelia Lopez',
      review: "Lorem ipsum"
    },{
      photo: 'https://avatars1.githubusercontent.com/u/7938095?s=460&v=4',
      name: 'Noelia Lopez',
      review: "Lorem ipsum"
    },{
      photo: 'https://avatars1.githubusercontent.com/u/7938095?s=460&v=4',
      name: 'Noelia Lopez',
      review: "Lorem ipsum"
    },{
      photo: 'https://avatars1.githubusercontent.com/u/7938095?s=460&v=4',
      name: 'Noelia Lopez',
      review: "Lorem ipsum"
    },{
      photo: 'https://avatars1.githubusercontent.com/u/7938095?s=460&v=4',
      name: 'Noelia Lopez',
      review: "Lorem ipsum"
    }];

    this.slickConfig = {
      enabled: true,
      autoplay: true,
      draggable: false,
      autoplaySpeed: 1000
    };

  }
]);
